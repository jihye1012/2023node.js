const express= require("express");

//서버 생성하기
const app=express();

let outputData=[];
app.use(function(request,response){
    let name=request.query.name;
    let area=request.query.area;

    response.send(`<h1>${name} : ${area}</h1>`)
})

app.listen(8889,()=>{
    console.log("port 8889로 실행");
})
