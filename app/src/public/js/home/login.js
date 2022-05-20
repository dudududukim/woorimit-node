'use strict';

console.log('hello login');

const id = document.querySelector('#id'),
    pwd = document.querySelector('#pwd'),
    loginBtn = document.querySelector('button');

// console.log(id);

loginBtn.addEventListener('click', login);

function login(){
    const req={
        id: id.value,
        psword: pwd.value,
    }
    console.log(req, JSON.stringify(req));
    fetch("/login", {
        method: "POST",
        headers:{
            'Content-Type': "application/json",
        },
        body: JSON.stringify(req),
        // JSON형식으로 데이터 전달할려고 JSON.stringify이용함

    });
    // fetch는 이 경로에서 데이터를 주고 받겠다는 역할?!
}