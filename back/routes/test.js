const express = require('express')
const router = express.Router();
const Test = require('../models/test');

router.post('/', async(req,res,next) => {
  try {
    const test = await Test.create({
      message:req.body.data.value,
      long:req.body.data.areaValue,
    })
    console.log('in sequelize, test, test result : ', test);
    res.status(201).json(test);
  } catch(err) {
    console.error(err);
    next(err);
  }
})

module.exports = router;
