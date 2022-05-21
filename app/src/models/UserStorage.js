'use strict';

class UserStorage {
    static #users = {
    //static을 통해서 외부에서 이 클래스로 직접 접근 가능
    //#은 은믹화priveil해서 외부에서 접근하지 못하게 함
        id:["kdhluck", "kdhgood"],
        pwd:["kp9551", "ambitikn0107"],
        name: ['김두현', '두두두두김'],
    };

    static getUsers(...fields){
        //...변수명을하면 이 함수를 호출할 때 
        // 넘긴 변수를 갯수에 상관없이 배열로 변수명에 저장함
        const users = this.#users;
        const reqUsers = fields.reduce((reqUsers, field)=>{
            //reqUsers가 어큐뮬레이터, field가 배열 요소 받는거
            if(users.hasOwnProperty(field)) 
                reqUsers[field] = users[field];
                return reqUsers;

        },{});  //reqUsers(첫번째 매개변수)가 원래는 reduce연결된 배열의
                // 첫번째 변수가 와야하나 {}로 설정해주는 역할
        return reqUsers;

    };
}

module.exports=UserStorage;