var cateController = require('../dataModules/cateModule')
// 获取所有分类数据
exports.getAllCateList = (req,res) => {
    // 调用分类数据模块获取所有数据
    cateController.getAllList((err,data) => {
        if(err){
            res.end('404')
        }else{
            res.json(data)
        }
    })
}

// 实现分类数据的编辑提交
exports.updateCategories = (req,res) => {
    // 接收用户数据
    var obj = req.body
    // 调用数据模块进行编辑操作
    cateController.updateCategories(obj,(err) => {
        if(err){
            res.json({
                code:201,
                msg:'编辑失败'
            })
        }else{
            res.json({
                code:200,
                msg:'编辑成功'
            })
        }
    })
}

// 实现分类数据的编辑提交
exports.addCategories = (req,res) => {
    // 接收用户数据
    var obj = req.body
    // 调用数据模块进行编辑操作
    cateController.addCategories(obj,(err) => {
        if(err){
            res.json({
                code:201,
                msg:'添加失败'
            })
        }else{
            res.json({
                code:200,
                msg:'添加成功'
            })
        }
    })
}