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

//
app.get('/page/:id',function(request,response){
    console.log('page');
    let pageId=request.params.id;
    //params 는 /:id처럼 :기호를 이용해서 지정된 라우팅 매개변수
    //query는 ?name=A과 같은 것은 요청 매개변수
    response.send(`<h1>${pageId}페이지</h1>
    <a href='/aaa'>aaa</a>
    <a href='/bbb'>bbb</a>`);
})

//전체선택자 => 전체선택자를 사용하는 라우터 메서드는 마지막에 위치할 수 있도록 한다.
//모든 라우터를 해당할 수 있음.
//express모듈은 라우터 메서드를 사용한 순서대로 요청을 확인한다.
app.all('*',function(request,response){
    response.status(404).send("<h1>ERROR 페이지를 찾을 수 없습니다.</h1>")
});

app.listen(8889,()=>{
    console.log("실행");
})