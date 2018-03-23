const Express = require('express');
const router = Express.Router();
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