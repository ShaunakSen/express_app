var express = require('express');
var router = express.Router();
//we only need the json file in our index page... so no point sticking it in app.js
var vd = require("../videodata.json");

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Express',
        name:'Little Mini',
        videodata:vd
    });
});

//whenever we request homepage render index.ejs.. u can also send addnl info. here we send title

module.exports = router;
