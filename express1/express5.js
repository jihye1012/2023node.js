//모듈 가져오기
const express=require("express");

//서버 생성하기
const app=express();

//router 미들웨어 사용하기
//-express모듈에 내장되어있음

app.get('/',function(request,response){
    response.send(`<h1>페이지</h1>
    <a href='/aaa'>aaa</a>
    <a href='/bbb'>bbb</a>`);
    
});

app.get('/aaa',function(request,response){
    response.send(`<h1>aaa페이지</h1>
    <a href='/aaa'>aaa</a>
    <a href='/bbb'>bbb</a>`);
});

app.get('/bbb',function(request,response){
    response.send(`<h1>bbb페이지</h1>
    <a href='/aaa'>aaa</a>
    <a href='/bbb'>bbb</a>`);
});

app.listen(8889,()=>{
    console.log("실행");
})