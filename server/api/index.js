const Express = require('express');
const router = Express.Router();

const {responseClient} = require('./util');
const Article = require('../models/article');
const Tags = require('../models/tags');

router.use('/user',require('./user'));

// 获取全部标签
router.get('/getAllTags', function(req, res) {
    Tags.find(null, 'name').then(data => {
        responseClient(res, 200, 0, '请求成功', data);
    }).catch(err => {
        console.log(err);
        responseClient(res);
    })
})

// 获取文章
router.get('/getArticles', function(req, res) {
    let tags = req.query.tag || null;
    let searchCondition = {};
    if (tags) {
        searchCondition.tags = tags;
    }
    let skip = (req.query.pageNum - 1) < 0 ? 0 : (req.query.pageNum -1) * 5;
    let responseData = {
        total: 0,
        list: []
    };
    Article.count(searchCondition)
        .then(count => {
            // console.log(count);
            responseData.total = count;
            Article.find(searchCondition, '_id author title content tags', {
                skip: skip,
                limit: 5
            }).then(result => {
                responseData.list = result;
                // console.log(result);
                responseClient(res, 200, 0, 'success', responseData)
            }).catch(err => {
                console.log(err);
                throw err            
            })
        }).catch(err => {
            responseClient(res);
        })
})

// 获取文章详情
router.get('/getAticleDetail', function(req, res) {
    let _id = req.query.id;
    Article.findOne({_id})
        .then(data => {
            console.log(data);
            responseClient(res, 200, 0, 'success', data);
        }).catch(err => {
            responseClient(res);
        })
})
module.exports = router;