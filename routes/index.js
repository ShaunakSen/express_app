var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Express',
        name:'Little Mini'
    });
});

//whenever we request homepage render index.ejs.. u can also send addnl info. here we send title

module.exports = router;
