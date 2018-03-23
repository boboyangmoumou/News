const Express = require('express');
const router = Express.Router();
const User = require('../models/user');
// router.use('/check',require('./middlewares/check'));
router.get('/',function(req,res,next){
    res.send("bbbb");
})
// 用户登录
router.post("/login", function (req,res,next) {
    let param = {
        userName: req.body.userName,
        userPwd: req.body.userPwd,
    }
    User.findOne(param, function(err, doc) {
        if(err) {
            res.json({
                status: '1',
                mag: err.message
            });
        }else{
            if(doc) {
                res.cookie("userId", doc.userId, {
                    path: '/',
                    maxAge: 1000*60*60
                })
                res.cookie("userName", doc.userName, {
                    path: '/',
                    maxAge: 1000*60*60
                })
                res.json({
                    status: '0',
                    msg: '',
                    result: {
                        userName:doc.userName
                    }
                });
            }else {
                res.json({
                    status: '1',
                    msg: '帐号或者密码错误',
                    result: ''
                })
            }
        }
    });
});
// 用户登出
router.post('logout', function(req, res, next){
    res.cookie("userId", "",{
        path: "/",
        maxAge: -1
    })
    res.json({
        status: '0',
        msg: '',
        result: ''
    })
});
// 用户验证
router.get("/checkUserInfo", function(req,res,next) {
    if(req.cookies.userInfo){
        res.json({
            status: '0',
            msg: '',
            result: req.cookies.userName || ''
        });
    }else {
        res.json({
            status: '1',
            msg: '未登录',
            result: ''
        });
    }
});

module.exports = router;