$(function(){
    // 用户一选择文件就立刻进行文件的上传
    $('#feature').on('change',function(){
        var file = document.getElementById('feature').files[0]
        // 我们会使用formdata收集图片数据
        var formdata = new FormData()
        formdata.append('img',file)
        // 使用ajax实现文件数据的上传
        $.ajax({
            type:'post',
            url:'/uploadFile',
            data:formdata,
            processData:false,
            contentType:false,
            dataType:'json',
            success:function(result){
                console.log(result)
                if(result.code == 200){
                    // 实现预览
                    $('.thumbnail').fadeIn(200).attr('src','/uploads/'+result.img)
                    // 将图片路径存储到隐藏域中
                    $('.postimg').val('/uploads/'+result.img)
                }else{
                    $('.alert-danger > span').text(result.msg)
                    $(".alert-danger").fadeIn(200).delay(3000).fadeOut(200)
                }
            }
        })
    })

    // 初始化CKEDITOR:创建一个富文本框组件覆盖指定的Textarea
    // 创建一个ckeditor实例
    CKEDITOR.replace('content');

     // 加载分类下拉列表数据
     (function () {
        $.ajax({
            type: 'get',
            url: '/getCategories',
            dataType: 'json',
            success: function (result) {
                console.log(result)
                // 调用模块引擎生成动态结构
                // 直接拼接字符串
                var html = ''
                for (var i = 0; i < result.length; i++) {
                    html += `<option value="${result[i].id}">${result[i].name}</option>`
                }
                $('.cateSelector').html(html)
            }
        })
    })();

    // 新增文章
    $('.btnsave').on('click',function(){
        // console.log($('form').serialize())
        // 使用它所提供的方式获取数据
        // console.log(CKEDITOR.instances.content.getData())
        // str = str + "&content="+CKEDITOR.instances.content.getData()
        // 让ckeditor和textarea的数据进行同步
        CKEDITOR.instances.content.updateElement()
        // 发起ajax
        $.ajax({
            type:'post',
            url:'/addPost',
            data:$('form').serialize(),
            dataType:'json',
            success:function(result){
                console.log(result)
                if (result.code == 200) {
                    $('.alert-danger span').text(result.msg)
                    $('.alert-danger').fadeIn(100).delay(2000).fadeOut(100)
                    setTimeout(function(){
                        // 进行页面跳转，跳转到文章列表页
                        location.href='/admin/posts'
                    },2200)
                } else {
                    $('.alert-danger span').text(result.msg)
                    $('.alert-danger').fadeIn(1000).delay(2000).fadeOut(1000)
                }
            }
        })
    })
})