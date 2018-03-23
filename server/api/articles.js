const Express = require('express');
const router = Express.Router();
const Article = require('../models/article');
const {responseClient} = require('./util');
router.get('/',function(req,res,next){
    res.send("aaaaa");
})
// 新增文章
router.post('/addArticle', function(req, res) {
    const {
        title,
        content,
        tags,
    } = req.body;
    // const author = req.cookies.userName;
    let tempArticle = new Article({
        title,
        content,
        tags,
    });
    Article.findOne({title})
        .then(result => {
            if(!result){
                tempArticle.save().then(data => {
                    responseClient(res,200,0,'保存成功',data)
                }).catch(err => {
                    console.log(err);
                    throw err                    
                })
            }else {
                responseClient(res, 200, 1, '标题已存在')
            }
        }).catch(err => {
            responseClient(res);
        })
});

// 更新文章
router.post('/updateArticle', function(req, res) {
    const {
        title,
        content,
        tags,
        id
    } = req.body
    Article.update({_id: id},{title,content,tags})
        .then(result => {
            console.log(result);
            responseClient(res,200,0,'更新成功',result);
        }).catch(err => {
            console.log(err);
            responseClient(res);
        })
});
// 删除文章
router.get('/delArticle', function(req, res) {
    let id = req.query.id;
    Article.remove({_id: id})
        .then(result => {
            console.log(result);
            if(result.ok === 1){
                responseClient(res,200,0,'删除成功!');
            }else{
                responseClient(res,200,1,'文章不存在');
            }
        }).catch(err => {
            console.log(err);
            responseClient(res);
        })
});

module.exports = router;

