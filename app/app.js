'use strict';
//모듈
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require("dotenv");
dotenv.config();
// const morgan = require("morgan");
// const accessLongStream = require("./src/config/log");

//라우팅
const home = require('./src/routes/home');
const logger = require('./src/config/logger');

//앱 세팅 뭘 보여줄지
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(express.static(`${__dirname}/src/public`));
//정적인 디렉토리를 지정해준것!
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', home);
//use -> 미들웨어를 등록해주는 메서드

module.exports=app;

//브라우저가 요청한 경로로 이동해주는 라우팅
