var express = require('express')
// 路由模块
var router = require('./router')
// 引入ejs
var ejs = require('ejs')
var bodyParser = require('body-parser')
var session = require('express-session')

var app = express()
app.listen('3004',() => {
    console.log('http://127.0.0.1:3004')
})

// 托管静态资源
app.use('/assets',express.static('assets'))
app.use('/uploads',express.static('uploads'))

// 配置模块引擎为ejs
app.set('view engine','ejs')
// 下面这个配置的作用是配置ejs的模板文件夹，以后ejs会自动的去指定的目录下寻找页面文件
// views它会默认找这个views下面的模板文件，然后我们现在将这个views设置为我们所指定的目录
app.set('views',__dirname + '/views')

// 配置使用session
app.use(session({
    secret: 'mywords', // 加盐，你可以指定只有你一个人知道字符串
    //重新保存：强制会话保存即使是未修改的。默认为true但是得写上
    resave: false, 
    //强制“未初始化”的会话保存到存储。 
    saveUninitialized: false,
}))

// 添加body-parser中间件来处理参数
app.use(bodyParser.urlencoded({extended:false}))

// 添加所有请求的路由中间件函数
// 导航守卫+拦截器
// 这个中间件只关注路由跳转
app.use((req,res,next) => {
    // 判断是否登陆
    // 前台页面不用登陆:req.url.indexOf('/admin') == -1
    if(req.session.isLogin && req.session.isLogin == 'true' || req.url.indexOf('/admin') == -1 || req.url == '/admin/login'){
        // 进行下一步操作
        next()
    }else{
        res.redirect('/admin/login')
    }
})

// 使用use中间件在当前应用上挂载路由配置
// 路由可以认为是一个中间件
app.use(router)