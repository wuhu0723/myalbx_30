$(function () {

    $('.btn-primary').on('click', function () {

        // 收集用户数据
        var email = $('#email').val()
        var password = $('#password').val()

        // 发起ajax请求
        $.ajax({
            type: 'post',
            url: '/login',
            data: {
                email: email,
                password: password
            },
            dataType: 'json',
            success: function (result) {
                // 在浏览器的consle面板中输入
                if(result.code == 201){
                    $('.alert-danger').css('display',"block")
                    $('.alert-danger span').text(result.msg)
                }else{
                    location.href='/admin'
                }
            }
        })
    })
})