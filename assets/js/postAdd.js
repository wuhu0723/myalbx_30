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
                }else{
                    $('.alert-danger > span').text(result.msg)
                    $(".alert-danger").fadeIn(200).delay(3000).fadeOut(200)
                }
            }
        })
    })
})