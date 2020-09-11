const express = require('express');
const router = express.Router();
const User = require('../models/user')
const bcrypt = require("bcrypt");
const passport = require('passport')

router.post('/signup', async (req,res,next) => {
  console.log('b, user, signup, req' , req.body);
  const { email, password } = req.body;
  try {
    const exUser = await User.findOne({where: { email }})
    if (exUser) {
      return res.redirect('/signup?error=exist')
    }

    const hash = await bcrypt.hash(password, 12);
    await User.create({
      email,
      password: hash,
    });
    // return res.redirect("/");  //TODO: 백에서의 redirect.
    return res.send('회원가입 성공!')
  } catch(error) {
    console.error(error);
    next(error);
  }
})

router.post('/login', (req,res,next) => {
  console.log('b routes user, login, query 실행', req.query)
  console.log('b routes user, login, body 실행', req.body)
  passport.authenticate('local',(authError, user,info) => {
    if (authError) {
      console.error(authError);
      return next(authError);
    }
    if (!user) {
      return res.redirect(`/loginError=${info.message}`)
    }
    return req.login(user, (loginError) => {
      if (loginError) {
        console.error(loginError);
        return next(loginError);
      }
      return res.redirect('/')
    })
  })(req,res,next);
})

module.exports = router;
