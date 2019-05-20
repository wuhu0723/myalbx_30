var postsModule = require('../dataModules/postModule')

module.exports = {
    // 获取所有文章数据
    getAllPostList(req,res){
        // 只要配置了body-parse就可以这样取值
        // console.log(req.query)
        // 以后如果是get方式传递的参数，都可以使用req.query来获取，它得到的是一个对象
        // 调用数据模块获取所有文章数据
        postsModule.getAllPostList(req.query,(err,data) => {
            if(err){
                res.json({
                    code:404,
                    msg:'err'
                })
            }else{
                res.json({
                    code:200,
                    data:data
                })
            }
        })
    }
}


// module.exports.getAllPostList = (req,res) => {

// }

// 使用ES6新语法 ，对象中的成员添加有两种新的形式
// 1.添加属性：属性名称和值如果一样，就可以只写一个
// 2.添加方法：在对象内部可以直接添加方法
// var age = 20
// var obj = {
//     age:age,
//     say:function(){

//     }
// }

// var obj = {
//     age,
//     say(){

//     }
// }