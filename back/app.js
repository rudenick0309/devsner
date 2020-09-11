const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const passport = require('passport');

dotenv.config();

const {sequelize} = require('./models')
const indexRouter = require('./routes')
const errorsRouter = require('./routes/errors')
const userRouter = require('./routes/user')
const passportConfig = require('./passport');

const app = express();
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

passportConfig();

app.use(morgan('dev'))
// app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json({
  limit:'50mb'
}));
app.use(express.urlencoded({limit:'50mb',extended:true}))
app.use(cookieParser(process.env.COOKIE_SECRET))
app.use(session({
  resave:false,
  saveUninitialized:false,
  secret:process.env.COOKIE_SECRET,
  cookie:{
    httpOnly:true,
    secure:false,
  }
}))
app.use(cors({
    origin: 'http://localhost:3000', // withCredentials = true ? ->  * 사용 불가. 개별 url을 적어줘야 한다.
    credentials:true,  // 쿠키를 같이 전달하고 싶을 떄 true
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/errors', errorsRouter);
app.use('/auth', userRouter);

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
