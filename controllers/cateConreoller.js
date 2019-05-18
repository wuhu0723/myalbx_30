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