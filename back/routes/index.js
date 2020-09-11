const express =require('express')
const router = express.Router();
const ErrorsReact = require('../models/errorsReact')
const User = require('../models/user')

router.get('/', async (req,res,next) => {
  console.log('b, routes index, / executes', req);
  try {
    const user = await User.findOne({
      attributes:['email'],
    })
    console.log('b routex index, post', user);
    res.json(user)
  } catch(error) {
    console.error(error);
    next(error);
  }

})

module.exports = router;
