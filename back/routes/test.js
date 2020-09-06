const express = require('express')
const router = express.Router();
const Test = require('../models/test');

//app에서는 localhost/test/
router.post('/', async(req,res,next) => {
  // console.log('in router, req.body: ', {value, areaValue});
  try {
    // console.log('in sequelize, test, req.body :', value, areaValue)
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
