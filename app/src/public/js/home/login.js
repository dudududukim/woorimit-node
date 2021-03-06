'use strict';

console.log('hello login');

const id = document.querySelector('#id'),
    pwd = document.querySelector('#pwd'),
    loginBtn = document.querySelector('#button');

// console.log(id);

loginBtn.addEventListener('click', login);

function login(){
    if(!id.value) return alert("please enter ID");
    if(!pwd.value) return alert("please enter PSWD");


    const req={
        id: id.value,
        pwd: pwd.value,
    }
    fetch("/login", {
        method: "POST",
        headers:{
            'Content-Type': "application/json",
            //내가  보내는 데이터 형식을 지정
        },
        body: JSON.stringify(req),
        // JSON형식으로 데이터 전달할려고 JSON.stringify이용함

    })
        .then((res)=>res.json())
        //이기 이 위에 친구가 promise로 return되서 다시 한번 .then 메서드 사용해서 console logd
        .then((res)=>{
            console.log(res);
            if(res.success){
                location.href="/";
            }else{
                if(res.err) alert(res.err);
                else alert(res.msg);
                location.href="/login";
            }
        })
        .catch((err)=>{
            console.error("로그인 중 에러발생");
            // console.error(err);
            // alert("에러 발생");
        });
    // fetch는 이 경로에서 데이터를 주고 받겠다는 역할?!
}