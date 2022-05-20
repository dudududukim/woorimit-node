'use strict';

const hello = (req, res)=>{
    //브라우저에서 /요청이 오면 이렇게 하겠다
    res.render('home/index');
    //./view안해도 되는게 app.set에서 views를 ./views로 했기때문에
};

const login = (req, res)=>{
    //localhost:3000/login으로 접속시
    res.render('home/login');
};

module.exports={
    hello,
    login,
};

//app.get에서 사용자의 req에 따라서 어떠한 콜백을 보낼지를 컨트롤러로 묶어서 저장한다
//즉 프로그램을 좀 더 읽기 쉽게 모듈화하는 과정이라고 볼 수 있다
