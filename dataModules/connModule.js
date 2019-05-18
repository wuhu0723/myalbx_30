// 这个文件是添加对uesrs表的所有操作
var mysql = require('mysql')
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'baixiu'
})


module.exports = connection
