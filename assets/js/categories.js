$(function(){
    // 获取所有分类数据
    $.ajax({
        type:'get',
        url:'/getCategories',
        dataType:'json',
        success:function(result){
            console.log(result)
            // 调用模块引擎生成动态结构
            var html = template('cateListTemp',{list:result})
            $('tbody').html(html)
        }
    })
})