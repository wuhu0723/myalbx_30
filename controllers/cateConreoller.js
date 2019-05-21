var cateModule = require('../dataModules/cateModule')
var common = require('./common')
// 获取所有分类数据
exports.getAllCateList = (req,res) => {
    // 调用分类数据模块获取所有数据
    cateModule.getAllList((err,data) => {
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
    cateModule.updateCategories(obj,(err) => {
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
    cateModule.addCategories(obj,(err) => {
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

// 根据id删除分类数据
exports.delCategoryById = (req,res) => {
    var id = common.getParameter(req.url).id
    // 接收用户数据
    // 调用数据模块进行编辑操作
    cateModule.delCategoryById(id,(err) => {
        if(err){
            res.json({
                code:201,
                msg:'删除失败'
            })
        }else{
            res.json({
                code:200,
                msg:'删除成功'
            })
        }
    })
}


// 批量删除，传入的参数的格式是：1,2,3,4 字符串拼接的格式
exports.delCategories = (req,res) => {
    console.log(req.body)
    // 获取id
    var ids = req.body.ids
    // 调用数据模块进行批量删除
    cateModule.delCategories(ids,(err) =>{
        if(err){
            res.json({
                code:201,
                msg:'删除失败'
            })
        }else{
            res.json({
                code:200,
                msg:'删除成功'
            })
        }
    })
}