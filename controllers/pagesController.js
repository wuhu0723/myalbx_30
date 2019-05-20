var querystring = require('querystring')
// 返回前台首页
exports.getIndexPage = (req,res) => {
    res.render('index.ejs')
}
exports.getDetailPage = (req,res) => {
    res.render('detail.ejs')
}
exports.getListPage = (req,res) => {
    res.render('list.ejs')
}


// 获取后台首页
exports.getAdminPage = (req,res) => {
    // 判断有没有登陆过？
    // var mycookie = querystring.parse(req.headers.cookie)
    // if(mycookie.isLogin && mycookie.isLogin == 'true'){
    //     // // 下面这个配置的作用是配置ejs的模板文件夹，以后ejs会自动的去指定的目录下寻找页面文件
    //     // app.set('views',__dirname + '/views')
    //     res.render('admin/index.ejs')
    // }else{
    //     res.redirect('/admin/login')
    // }
    // console.log(req.session)
    // 因为是使用session进行了状态保持，所以这里应该获取req.session
    if(req.session.isLogin && req.session.isLogin == 'true'){
        res.render('admin/index.ejs')
    }else{
        res.redirect('/admin/login')
    }
  
}
exports.getCategoriesPage = (req,res) => {
    res.render('admin/categories.ejs')
}
exports.getCommentsPage = (req,res) => {
    res.render('admin/comments.ejs')
}
exports.getLoginPage = (req,res) => {
    res.render('admin/login.ejs')
}
exports.getNavMenusPage = (req,res) => {
    res.render('admin/nav-menus.ejs')
}
exports.getPasswordResetPage = (req,res) => {
    res.render('admin/password-reset.ejs')
}
exports.getPostAddPage = (req,res) => {
    res.render('admin/post-add.ejs')
}
exports.getPostsPage = (req,res) => {
    res.render('admin/posts.ejs')
}
exports.getProfilePage = (req,res) => {
    res.render('admin/profile.ejs')
}
exports.getSettingsPage = (req,res) => {
    res.render('admin/settings.ejs')
}
exports.getSlidesPage = (req,res) => {
    res.render('admin/slides.ejs')
}
exports.getUsersPage = (req,res) => {
    res.render('admin/users.ejs')
}