$(function () {
    // 将pageNum和pageSize做为全局变量，以便让其它的事件操作来修改这个属性值
    var pageSize = 4
    var pageNum = 1
    // 发起ajax获取所有文章数据
    function initData(query={}) {
        console.log({pageNum,pageSize,...query})
        $.ajax({
            type: 'get',
            url: '/getAllPostList',
            data: {
                pageNum,
                pageSize,
                ...query
            },
            dataType: 'json',
            success: function (result) {
                // console.log(result)
                // 生成数据列表动态结构
                var html = template('postListTemp', result.data)
                $('tbody').html(html)
                // 还要生成分页结构
                setPagnator(Math.ceil(result.data.total / pageSize))
            }
        })
    }
    initData();

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
                var html = '<option value="all">所有分类</option>'
                for (var i = 0; i < result.length; i++) {
                    html += `<option value="${result[i].id}">${result[i].name}</option>`
                }
                $('.cateSelector').html(html)
            }
        })
    })()

    // 生成分页结构并实现分页业务逻辑
    // - bootstrapMajorVersion：重要属性，必须正确的设置，如果错误后期不能生成分页结构。我们现在用的bootstrap是3.3.7，所以对应的分页区域的结构要使用ul
    // - currentPage:当前页码，这个页码后期需要传递给后台进行查询操作
    // - totalPages：总页数，没有总页面如何生成对应的分页结构呢
    // - onPageClicked：点击分页结构中的页码标签的时候所触发的事件
    function setPagnator(total) {
        // 进行分页结构的初始化，并提供相关配置
        $('.pagination').bootstrapPaginator({
            bootstrapMajorVersion: 3,
            currentPage: pageNum,
            // totalPages：会根据这值生成分页单击按钮
            totalPages: total,
            onPageClicked: function (event, originalEvent, type, page) {
                // page就是当前需要获取数据的页码
                console.log(page)
                // 修改全局的pageNum,以让我重新发起数据请求的时候能够获取到指定页码的数据
                pageNum = page
                // 再次获取数据
                initData()
            }
        })
    }


    // 点击筛选实现数据的筛选
    $('.btnFilter').on('click',function(){
        var query = {}
        // 收集用户数据--筛选条件
        var cate = $('.cateSelector').val()
        var statu = $('.statuSelector').val()
        console.log(cate,statu)
        // 如果获取到的value是all，说明用户并没有选择这个条件
        if(cate != 'all'){
            query['category_id'] = cate
        }
        if(statu != 'all'){
            query['status'] = statu
        }
        console.log(query)
        // 根据条件获取数据
        initData(query)
    })
});

