const Express = require('express');
const router = Express.Router();
const Tags = require('../models/tags');
const {responseClient} = require('./util');
const fs = require('fs');
// const pathResult = require('../public/text.json');
var files = "../public/test.json";

// console.log(data);

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
router.get('/getPath',function(req, res, next) {
    // var result  = JSON.parse(fs.readFileSync(files));
    var data = fs.readFileSync(files,"utf-8");
    // console.log(result);
    let itemsList = data.split(',').filter(world => world.length > 10);
    res.json({
        status: '0',
        msg: '数据正确',
        result: itemsList.pop()
    })
})
module.exports = router;
