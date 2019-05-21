var formidable = require('formidable')
var path = require('path')

module.exports = {
    // 实现文件上传
    doUpload(req,res){
        // 1.创建文件上传对象
        var form = new formidable.IncomingForm()
        // 2.设置编码
        form.encoding = 'utf-8'
        // 3.设置文件上传存储目录
        form.uploadDir = __dirname + '/../uploads'  // ?
        // 4.是否保留文件扩展名
        form.keepExtensions = true
        // 5.调用 方法来实现文件上传
        form.parse(req,(err,fileds,files) => {
            if(err){
                res.json({
                    code:201,
                    msg:'文件上传失败'
                })
            }else{
                // console.log(files)
                var filename = path.basename(files.img.path)
                // console.log(filename)
                res.json({
                    code:200,
                    msg:'文件上传成功',
                    img:filename
                })
            }
        })
    }
}