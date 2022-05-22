'use strict';

const { copyFile } = require("fs");

const fs =require("fs").promises;

class UserStorage {
    //#은 클래스 맨 위에
    static #getUserInfo(data, id){
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);   // => [id, pwd, name]이 만들어짐
        const userInfo = usersKeys.reduce((reqUser, info)=>{
            reqUser[info] = users[info][idx];
            return reqUser;
        },{});
        return userInfo;
    }

    static #getUsers(data, isAll, fields){
        const users = JSON.parse(data);
        
        if(isAll) return users;

        const reqUsers = fields.reduce((reqUsers, field)=>{
            //reqUsers가 어큐뮬레이터, field가 배열 요소 받는거
            if(users.hasOwnProperty(field)) 
                reqUsers[field] = users[field];
                return reqUsers;

        },{});  //reqUsers(첫번째 매개변수)가 원래는 reduce연결된 배열의
                // 첫번째 변수가 와야하나 {}로 설정해주는 역할
        return reqUsers;
    }

    //static을 통해서 외부에서 이 클래스로 직접 접근 가능
    //#은 은믹화priveil해서 외부에서 접근하지 못하게 함

    static getUsers(isAll, ...fields){
        //...변수명을하면 이 함수를 호출할 때 
        // 넘긴 변수를 갯수에 상관없이 배열로 변수명에 저장함
        // const users = this.#users;
        return fs.readFile("./src/databases/users.json")
            .then((data)=>{
                return this.#getUsers(data,isAll, fields);
            })
            .catch(console.error);
    }

    static getUserInfo(id){
        //fs.readFile의 경로는 app.js가 있는곳
        return fs.readFile("./src/databases/users.json")
            .then((data)=>{
                return this.#getUserInfo(data, id);
            })
            .catch(console.error);
    }

    static async save(userInfo){
        const users = await this.getUsers(true);
        //true면 지금 모든 ket값들의 데이터를 가져온다는것
        if(users.id.includes(userInfo.id)){
            throw "Already our user";
        }
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.pwd.push(userInfo.pwd);
        fs.writeFile("./src/databases/users.json", JSON.stringify(users));
        return {success:true, msg:"Signed UP!"}
    }
}

module.exports=UserStorage;