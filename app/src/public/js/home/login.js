'use strict';

console.log('hello login');

const id = document.querySelector('#id'),
    pwd = document.querySelector('#pwd'),
    loginBtn = document.querySelector('button');

console.log(id);

loginBtn.addEventListener('click', login);

function login(){
    const req={
        id: id.value,
        psword: pwd.value,
    }
    console.log(req);
}