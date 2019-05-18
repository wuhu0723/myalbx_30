var express = require('express')
var querystring = require('querystring')
var session=require('express-session')


var app = express()
app.listen('3009',() => {
    console.log('http://127.0.0.1:3009')
})

// 配置使用session
app.use(session({ 
    secret: 'mywords', // 加盐，你可以指定只有你一个人知道字符串
    //重新保存：强制会话保存即使是未修改的。默认为true但是得写上
    resave: false, 
    //强制“未初始化”的会话保存到存储。 
    saveUninitialized: false,  
}))


app.get('/',(req,res)=>{
    console.log(req.session)
    if(req.session.islogin && req.session.islogin == 'true'){
        res.end('welcome back')
    }else{
        req.session.islogin = 'true'
        res.end('first')
    }
})