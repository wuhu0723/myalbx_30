module.exports = {
    getParameter(str) {
        var obj = {}
        // http://127.0.0.1:3004/delCategoryById?id=3&name=jack
        str = str.substring(str.lastIndexOf('?')+1) //id=3&name=jack
        // 进行拆分
        var arr = str.split('&') // ['id=3','name=jack']
        // 循环遍历再次拆分
        for(var i=0;i<arr.length;i++){
            // arr[i] :'id=3'
            var temp = arr[i].split('=') // ['id','3']
            obj[temp[0]] = temp[1] //obj['id'] = 3   --索引器
        }
        return obj
    }
}