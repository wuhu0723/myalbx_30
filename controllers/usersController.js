
var userModule = require('../dataModules/usersModule')
// 实现登陆验证
exports.login = (req,res) => {
    // 实现登陆业务，这里涉及到数据库操作，所以调用数据模块进行处理
    // console.log('在终端中输出')

    // 1.获取用户数据
    // {email:'wuhu0723@126.com',password:'abcdef'}
    console.log(req.body)
    // 2.调用数据模块进行处理
    userModule.getUserByEmail(req.body.email,(err,data) => {
        if(err){
            res.json({
                code:201,
                msg:'服务器异常'
            })
        }else{
            // 判断有没有返回数据行
            if(data){ //返回了数据行,说明根据邮箱查询到数据
                // 再来判断是否正确
                if(data.password == req.body.password){
                    res.json({
                        code:200,
                        msg:'登陆成功'
                    })
                }else{
                    res.json({
                        code:201,
                        msg:'密码错误'
                    })
                }

            }else{//根据邮箱没有查询出任何的数据
                res.json({
                    code:201,
                    msg:'邮箱输入错误'
                })
            }
        }
    })
}