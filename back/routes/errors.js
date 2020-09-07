const express = require('express')
const router = express.Router();
const ErrorsReact = require('../models/errorsReact')

router.post('/react', async (req, res, next) => {
  console.log('in routes errors react, req.body; ', req.body)
  try {
    const react = await ErrorsReact.create({
      title: req.body.data.title,
      content: req.body.data.content,
    })

    res.status(201).json(react)
  } catch(err) {
    console.error(err);
    next(err);
  }
})


router.get('/react', async (req, res, next) => {
  try {
    const react = await ErrorsReact.findAll()
    res.status(201).json(react)
  } catch(err) {
    console.error(err);
    next(err);
  }
})

module.exports = router;
