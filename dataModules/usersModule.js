// 这个文件是添加对uesrs表的所有操作
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
            console.log(err)
            callback(err)
        }else{
            // 如果能够查询到数据，最多一条数据
            // 1.用户传入的回调函数参数是有两个形参，第一个err,第二个对是data
            // 2.数据操作只有两种合理的结果：成功，失败  (了解事务)
            // 3.对于查询，我们一般是需要数据操作结果，所以和和第二个参数就是为了得到操作结果，对于 增加 删除和修改没有错误就是正确
            // 4.在js中，调用方法的时候，实参和形参的顺序一定要对应，第一个实参一定是赋值给和引一个形参的

            // 5.results无论如何都会是一个数组，在这里，我们是email是唯一值，所以根据email最多只能查询出一条记录
            // 6.如果查询出数据，也只有一条数据，那么results[0]获取的是一个对象，如果没有查询出值，获取到null
            callback(null,results[0])
        }
    })
}
