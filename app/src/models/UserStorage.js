'use strict';

const db = require("../config/db");

class UserStorage {
    static getUserInfo(id){
        const query = "SELECT * FROM users WHERE id = ?;";
        return new Promise((resolve, reject)=>{
            db.query(query,[id], (err, data)=>{
                if(err) {
                    reject(`${err}`);
                }
                else resolve(data[0]);
            });
        });
    }

    static async save(userInfo){
        const query = "INSERT INTO users(id, name, pwd) VALUES(?, ?, ?);";
        return new Promise((resolve, reject)=>{
            db.query(query,[userInfo.id, userInfo.name, userInfo.pwd], (err)=>{
                if(err) {
                    reject(`${err}`);
                }
                else resolve({success : true, msg : "added"});
            });
        });
    }
}

module.exports=UserStorage;