'use strict';

const name = document.querySelector('#name'),
    id = document.querySelector('#id'),
    pwd = document.querySelector('#pwd'),
    cpwd = document.querySelector('#confirm-pwd'),
    registerBtn = document.querySelector('button');
console.log("hello register");
// console.log(id);

registerBtn.addEventListener('click', register);

function register(){
    if(!id.value) return alert("please enter ID");
    if(pwd.value !== cpwd.value) return alert("Not same password");

    const req={
        name: name.value,
        id: id.value,
        pwd: pwd.value,
    }
    console.log(JSON.stringify(req));
    fetch("/register", {
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
                alert(res.msg);
                location.href="/login";
            }else{
                alert(res.msg);
            }
        })
        .catch((err)=>{
            console.error("회원가입 중 에러발생");
        });
    // fetch는 이 경로에서 데이터를 주고 받겠다는 역할?!
}