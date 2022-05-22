'use strict';

const { response } = require("../../../app");
const User = require("../../models/User");
const UserStorage = require('../../models/UserStorage');

const output = {
    home: (req, res) => {
        //브라우저에서 /요청이 오면 이렇게 하겠다
        res.render('home/index');
        //./view안해도 되는게 app.set에서 views를 ./views로 했기때문에
    },
    login: (req, res) => {
        //localhost:3000/login으로 접속시
        res.render('home/login');
    },
    register:(req, res) =>{
        res.render('home/register');
    },
}

const process = {
    login: async (req, res) =>{
        const user = new User(req.body);
        const response = await user.login();
        //login이 async이기 때문에 login을 실행시키는 부분에도 async가 있어서
        //await의 처리가 양호핟
        return res.json(response);
        
    },
    register:(req, res)=>{
        const user = new User(req.body);
        const response = user.register();
        return res.json(response);
    },
}

module.exports = {
    output,
    process,
};

//app.get에서 사용자의 req에 따라서 어떠한 콜백을 보낼지를 컨트롤러로 묶어서 저장한다
//즉 프로그램을 좀 더 읽기 쉽게 모듈화하는 과정이라고 볼 수 있다

// const id = req.body.id,
//     pwd = req.body.pwd;
// console.log(id, pwd);

// const users = UserStorage.getUsers('id', 'pwd');
// //Userstorage.js에서 직접 users에는 접근하지 못하게하면서
// //getUsers라는 메소드를 지정해서
// //개발자가 넘기는 변수들만을 users에서 골라오는 함수를 구성함


// const response = {};

// if(users.id.includes(id)){
//     const idx = users.id.indexOf(id);
//     if(users.pwd[idx] === pwd){
//         response.success = true;
//         return res.json(response);
//     }
// }
// response.success = false;
// response.msg = "Login failed!";
// return res.json(response);