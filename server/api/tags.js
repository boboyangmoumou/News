const Express = require('express');
const router = Express.Router();
const Tags = require('../models/tags');
const {responseClient} = require('./util');
router.get('/list', function(req, res, next) {
    res.send("ccc");
});
// 增加标签
router.post('/addTag', function(req, res) {
    let {name} = req.body;
    Tags.findOne({
        name
    }).then(result => {
        if(!result) {
            let tag = new Tags({
                name
            });
            tag.save()
                .then(data => {
                    responseClient(res, 200, 0, '添加成功', data)
                }).catch(err => {
                    throw err
                })
        }else {
            responseClient(res, 200, 1, '标签以存在');
        }
    }).catch(err => {
        console.log(err);
        responseClient(res);
    })
})
// 删除标签
router.get('/delTag', function(req, res) {
    let {name} = req.query;
    Tags.remove({name})
        .then(result => {
            console.log(result);
            if(result.ok === 1){
                responseClient(res, 200, 0, '删除成功');
            }else {
                responseClient(res, 200, 1, '标签不存在')
            }
        }).catch(err => {
            console.log(err);
            responseClient(res);
        })
})
module.exports = router;
