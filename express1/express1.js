const express= require("express");

//서버 생성하기
const app=express();

app.use(function(request,response){
    response.writeHead(200,{"Context-Type":"text/html"});
    response.end("<h1> Express 실행 </h1>");
});

app.listen(8889,()=>{
    console.log("port 8889로 실행");
});

