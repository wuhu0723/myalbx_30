$(function(){
    // 我需要在路由满足条件的情况为#menu-posts添加样式和属性
    // 1.获取到当前路由，需要判断是否带参数
    // http://127.0.0.1:3004/admin/post-add?id=1
    // 判断是否有参数，就是看是否有问号
    // var index = location.href.indexOf('?')
    // var routername
    // if(index == -1){
    //     routername = location.href.substring(location.href.lastIndexOf('/')+1)
    // }else{
    //     routername = location.href.substring(location.href.lastIndexOf('/')+1,index)
    // }
    var routername = itcast.getRouterName(location.href)
    
    // 2.获取到当前元素，为元素进行相关设置
    var menu_posts = $('#menu-posts')
    if(routername == 'posts' || routername == 'post-add' || routername == 'categories'){
        menu_posts.addClass('in')
        menu_posts.attr('aria-expanded',true)
    }

    // 3.设置菜单也需要这样处理
    var menu_settings = $('#menu-settings')
    if(routername == 'nav-menus' || routername == 'slides' || routername == 'settings'){
        menu_settings.addClass('in')
        menu_settings.attr('aria-expanded',true)
    }

    // 为当前li元素添加样式
    $('li').removeClass('active')
    $('#'+routername).addClass('active')
})