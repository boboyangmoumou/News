const Express = require('express');
const http = require('http');
const router = Express.Router();
const User = require('../models/user');
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/blog1');

mongoose.connection.on("connected",function (){
    console.log("mongodb connected success")
})

mongoose.connection.on("error", function (){
    console.log("mongodb connected error")
})

mongoose.connection.on("disconnection", function (){
    console.log("mongodb connected disconnection")
})
require('../util/util');
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
                res.cookie("userId", doc._id, {
                    path: '/',
                    maxAge: 1000*60*60
                })
                res.cookie("userName", doc.userName, {
                    path: '/',
                    maxAge: 1000*60*60
                })
                res.json({
                    status: '0',
                    msg: '登录成功',
                    result: {
                        userName: doc.userName
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
    if(req.cookies.userId){
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

router.get("/wx/onlogin", (req,res,next) => {
    // let code = req.query.code;
    http.get({
        url:'https://api.weixin.qq.com/sns/jscode2session',
        json: true,
        qs: {
            grant_type:'authorization_code',
            appid: 'wxe100d60d0faea47d',
            secret: '3e3d59aa6d4e27c732997dc532d1a6b5',
            js_code: '003QVZni2wTP0J0UeBoi2sQHni2QVZnm'
        }
    },(err,response,data) => {
        if(response.statusCode === 200) {
            console.log("[openid]", data.openid)
            console.log("[session_key]", data.session_key)
        }
    })
})
module.exports = router;