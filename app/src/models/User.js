"use strict";
const UserStorage = require("./UserStorage");
class User{
    constructor(body){
        this.body = body;        
    }
    async login(){
        const client = this.body;
        try{
        const user = await UserStorage.getUserInfo(client.id);
        //awiat은 async함수 안에서만 작동하므로
        //login()에 async를 걸어놓음
        //Userstorage.getUserInof가 fs로 읽은파일을 프로미스로 반환하기 때문에
        //읽기 전에 데이터가 할당 되는 것을 막고자 awiat 함수를 사용함

        if(user){
            if(user.id === client.id && user.pwd === client.pwd){
                return {success : true};
            }
            return {success : false, msg : "Please check password, again."};
        }
        return {success : false, msg : "You're not our user"};
        }catch(err){
            return {success: false, err};
        }
        
    }
    async register(){
        const client = this.body;
        try{
            const response = await UserStorage.save(client);    
            //await을 거는 이유 : 기다려
            return response;
        }catch(err){
            console.error(err);
            return {success : false, err};
        }
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