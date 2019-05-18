$(function () {
    $('.btnEdit').css("display", "none")
    // 获取所有分类数据--初始化
    function init() {
        $.ajax({
            type: 'get',
            url: '/getCategories',
            dataType: 'json',
            success: function (result) {
                console.log(result)
                // 调用模块引擎生成动态结构
                var html = template('cateListTemp', { list: result })
                $('tbody').html(html)
            }
        })
    }
    init()

    // 为编辑按钮绑定事件--使用事件委托
    $('tbody').on('click', '.btn-edit', function () {
        // 填充默认数据--获取到数据
        // 使用自定义属性存储当前数据，所以通过自定义属性的方式获取数据
        // console.log($(this).data()['name'])
        // console.log($(this)[0].dataset['slug'])
        var data = $(this).data()
        // 为表单中的元素赋值
        $('#name').val(data.name)
        $('#slug').val(data.slug)
        $('#id').val(data.id)
        $('.btnEdit').css("display", "block")
        $('.btnAdd').css("display", "none")
    })

    // 实现编辑提交
    $('.btnEdit').on('click', function () {
        var data = $('form').serialize()
        $.ajax({
            type: 'post',
            url: '/updateCategories',
            data: data,
            dataType: 'json',
            success: function (result) {
                if (result.code == 200) {
                    $('.alert-danger span').text(result.msg)
                    $('.alert-danger').fadeIn(1000).delay(2000).fadeOut(1000)
                    // 刷新
                    init()
                    // 重置表单元素的数据
                    $('.btnEdit').css("display", "none")
                    $('.btnAdd').css("display", "block")
                    $('#name').val('')
                    $('#slug').val('')
                    $('#id').val('')
                } else {
                    $('.alert-danger span').text(result.msg)
                    $('.alert-danger').fadeIn(1000).delay(2000).fadeOut(1000)
                }
            }
        })
    })
})