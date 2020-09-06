const express =require('express')

const router = express.Router();

router.get('/', (req,res,next) => {
  res.send('nums executes')
})

router.get('/1', (req,res,next) => {
  res.send('1 executes')
})

router.get('/2', (req,res,next) => {
  res.send('2 executes')
})

router.get('/:nums', (req,res,next) => {
  res.send('nums executes')
})

module.exports = router;
