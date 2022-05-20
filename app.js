const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    //브라우저에서 /요청이 오면 이렇게 하겠다
    res.send('여기는 루트 입니다');
});

app.get('/login', (req, res)=>{
    //localhost:3000/login으로 접속시
    res.send('여기는 로그인 화면입니다');
})

app.listen(3000, ()=>{
    console.log('서버 가동');
});

