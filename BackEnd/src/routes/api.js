var express = require('express');
var router = express.Router();
var show = require("@jongjun/console")

var passport = require('../middlewares/passport'),
    sign = require('../function/CheckAPIKey'),
    multer = require('../../multer/multer'),
    test = require('../middlewares/test.js');

var User = require('../../../DB/sequelize/models/User');
var Record = require('../../../DB/sequelize/models/Record');
var Image = require('../../../DB/sequelize/models/Image');


router.post('/join', passport.join);
router.post('/swagger/join', sign.checkApiKey, passport.join);

router.post('/joinDelete', passport.deleteAPITest);
router.post('/swagger/joinDelete', sign.checkApiKey, passport.deleteAPITest);

router.post('/authenticate', passport.authenticate);
router.post('/swagger/authenticate', sign.checkApiKey, passport.authenticate);


router.post('/singleMulter', passport.isLoggedIn, multer.single("Image"), function(req,res){
    res.send(req.file)
});
router.post('/swagger/singleMulter',sign.checkApiKey, passport.isLoggedIn, multer.single("Image"), function(req,res){
    res.send(req.file)
});

router.post('/singleRecord', passport.isLoggedIn, multer.single("Image"), async function(req, res) {
    var {date, etc, grade} = req.body;
    var user = await User.findOne({where : {id : req.user.id}});
    var record = await user.createRecord({ date, etc, grade })
    await record.createImage({ img1 : req.file.filename})
    res.send("done")
})

router.post('/swagger/singleRecord', sign.checkApiKey, passport.isLoggedIn, multer.single("Image"), async function(req, res) {
    var {date, etc, grade} = req.body;
    var user = await User.findOne({where : {id : req.user.id}});
    var record = await user.createRecord({ date, etc, grade })
    await record.createImage({ img1 : req.file.filename})
    res.send("done")
})

router.get('/getRecord', passport.isLoggedIn, async function(req, res) {
    var user = await User.findOne({wherer : {id : req.user.id}});
    var recordArray = await user.getRecords({raw : true});
    var recordObj = Object.assign({}, recordArray)
    var recordCount = await user.countRecords()
    var img = {};
    for (var i = 0; i < recordCount; i++) {
        img[i] = await Image.findOne({where : {RecordId : recordArray[i].id}, raw : true})
    }
    var result = {user, record : recordObj, img}
    res.send(result)
})

router.get('/swagger/getRecord', sign.checkApiKey, passport.isLoggedIn, async function(req, res) {
    var user = await User.findOne({wherer : {id : req.user.id}});
    var recordArray = await user.getRecords({raw : true});
    var recordObj = Object.assign({}, recordArray)
    var recordCount = await user.countRecords()
    var img = {};
    for (var i = 0; i < recordCount; i++) {
        img[i] = await Image.findOne({where : {RecordId : recordArray[i].id}, raw : true})
    }
    var result = {user, record : recordObj, img}
    res.send(result)
})


router.post('/test', test);
router.post('/swagger/test', sign.checkApiKey, test);



module.exports = router;