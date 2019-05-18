var connection = require('./connModule')

// 获取所有分类数据
exports.getAllList = (callback) => {
    var sql = 'select * from categories where id != 1'
    // 调用query方法进行处理
    connection.query(sql,(err,results) => {
        if(err){
            callback(err)
        }else{
            callback(null,results)
        }
    })
}