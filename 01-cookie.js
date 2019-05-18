var express = require('express')
var querystring = require('querystring')


var app = express()
app.listen('3009',() => {
    console.log('http://127.0.0.1:3009')
})

app.get('/',(req,res) => {
    // 毫秒数参照1970-1-1 0-0-0
    // Date.now():离1970-1-1 0-0-0毫秒数
    var time = new Date(Date.now()+10000).toUTCString()
    console.log(time)
    // 获取cookie的方式
    // req.headers:所有请求头
    // req.headers.cookie:可以获取请求头中的cookie
    console.log(req.headers.cookie)
    // age=20; isLogin=true:如果有多组值，那和以第一个分隔符必须是'; '
    var mycookie = querystring.parse(req.headers.cookie,'; ','=') // {}
    console.log(mycookie)
    if(mycookie.isLogin && mycookie.isLogin == 'true'){
        res.end('welcome back')
    }else{
        // 如果登陆过，就显示：欢迎你回来
        // 如果第一次访问，就显示：你是第一次来吧
        res.writeHead(200,{
            'Content-Type':'text.html;charset=utf8',
            // expire
            // 设置过期时间
            // 设置多组值["","",""]
            'Set-Cookie':["isLogin=true;expires="+time,"age=20"]
        })
        res.end('first')
    }
})