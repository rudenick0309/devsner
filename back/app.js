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
const errorsRouter = require('./routes/errors')

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
app.use(express.json({
  limit:'50mb'
}));
app.use(express.urlencoded({limit:'50mb',extended:true}))
app.use(cookieParser(process.env.COOKIE_SECRET))

app.use(cors({
    origin: 'http://localhost:3000', // withCredentials = true ? ->  * 사용 불가. 개별 url을 적어줘야 한다.
    credentials:true,  // 쿠키를 같이 전달하고 싶을 떄 true
  })
);


app.use('/', indexRouter);
app.use('/test', testRouter);
app.use('/num', numsRouter);
app.use('/errors', errorsRouter);



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
