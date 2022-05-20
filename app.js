'use strict';
//모듈
const express = require('express');
const app = express();

const PORT = 3000;
//라우팅
const home = require('./routes/home');


//앱 세팅 뭘 보여줄지
app.set('views', './views');
app.set('view engine', 'ejs');

app.use('/', home);
//use -> 미들웨어를 등록해주는 메서드

app.listen(PORT, ()=>{
    console.log('서버 가동');
});

//브라우저가 요청한 경로로 이동해주는 라우팅




// const http = require('http');
// const app = http.createServer((req, res)=>{
//     res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
//     console.log(req.url);
//     //req.url은 뒤에 붙는 것들을 예기함
//     if(req.url === '/'){
//         res.end('여기는 루트입니다');
//     }
//     else if(req.url ==='/login'){
//         res.end('로그인 루트입니다.');
//     }
//     //여기서 보듯이 express와 달리 매우 복잡하고 안예쁜 코드를 짜야함 인코딩도 지정해주어야하고 아무쪼로 복잡함
// });

// app.listen(3001, ()=>{
//     console.log('http로 가동된 서버입니다.');
// });