const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');

dotenv.config();

const {sequelize} = require('./models')
const indexRouter = require('./routes')
const testRouter = require('./routes/test')
const numsRouter = require('./routes/nums')

const app = express();
console.log('1')
app.set('port', process.env.PORT || 3001);
sequelize.sync({
  force:false
})
  .then(()=>{
    console.log('데이터베이스 연결 성공')
  })
  .catch((err)=> {
    console.error(err);
  })


app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser(process.env.COOKIE_SECRET))

app.use(cors({
    // origin: "https://nodebird.com",  //특정 주소만 적어서 허용할수도 있고
    // origin: true, // * 대신 보낸 곳의 주소가 자동으로 들어가서 편리하다.  그래서 이거 쓰라공??
    // origin: '*',
    origin: 'http://localhost:3000', // withCredentials를 true로 설정했다면, 더 이상 * 를 쓸 수 없다. 개별 url을 적어줘야 한다.
    credentials:true,  // 나중에 true로 바꿀거래. 쿠키를 같이 전달하고 싶을 떄 true로 한다.
  })
);


app.use((req, res, next) => {
  console.log('모든 라우트에 실행이 되는 지 테스트 중입니다')
  next();
}, (req,res,next) => {
  console.log('이 로직은어떻게 되나요?')
  next()
}) // app.use( () => {}, () => {}, () => {}........ )

app.use((req, res, next) => {
  console.log('3번째 공통실행 용입니다')
  next();
})

app.use('/', indexRouter);
app.use('/test', testRouter);
app.use('/num', numsRouter);


// app.get('/', (req,res,next)=> {
//   res.send('executes')
// })
// app.get('/test', (req,res,next) => {
//   res.send('test')
// })
//
// app.get('/nums/1', (req,res,next)=> {
//   res.send('wild card 1')
// })
// app.get('/nums/2', (req,res,next)=> {
//   res.send('wild card 2')
// })
// app.get('/nums/:num', (req,res,next)=> {
//   res.send(`${req.params.num}`)
// })


// 라우트 없을 때
app.use((req,res,next) => {
  res.status(404).send('404처리를 할게요')
})

// 에러 처리 미들웨어
app.use((err, req, res, next) => {
  console.error(err);
  res.send('에러 처리 미들웨어');
})

// 서버 실행
app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
})
