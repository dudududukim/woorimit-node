"use strict";
const UserStorage = require("./UserStorage");
class User{
    constructor(body){
        this.body = body;        
    }
    login(){
        const body = this.body;
        const {id, pwd} = UserStorage.getUserInfo(body.id);
        console.log(id, pwd);
        if(id){
            if(id === body.id && pwd === body.pwd){
                return {success : true, msg : "Welcome!"};
            }
            return {success : false, msg : "Please check password, again."};
        }
        return {success : false, msg : "You're not our user"}
    }
}

module.exports = User;

//이 모듈은요
// 아까했던 사용자가 버튼을 누르는 이벤트가 발생했을 때 실행되는
// 이벤트리스너의 콜백인 login()함수가 샐행되었을때
// 그 안에서 전달받은 데이터의 body를 가지고 user라는 새로운 인스터를 만듦
// 그 인스턴스 안에서 login이라는 함수를 사용하여
// 사용자의 정보와 관련된 데이터베이스를 가져와 비교하고
// json형식의 success와 필요하다면 msg를 동시에 전달하는 모듈을 컨트롤러에서 분리시킨 것이다