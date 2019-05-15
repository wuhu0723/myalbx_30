
var mysql = require('mysql')
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'baixiu'
})

// 根据邮箱查询数据
exports.getUserByEmail = (email,callback) => {
    var sql = 'select * from users where email = ?'
    connection.query(sql,[email],(err,results) => {
        if(err){
            callback(err)
        }else{
            // 如果能够查询到数据，最多一条数据
            callback(null,results[0])
        }
    })
}
