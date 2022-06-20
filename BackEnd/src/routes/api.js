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
var Designer = require('../../../DB/sequelize/models/Designer');



router.post('/join', passport.join);
router.post('/swagger/join', sign.checkApiKey, passport.join);

router.post('/joinDelete', passport.deleteAPITest);
router.post('/swagger/joinDelete', sign.checkApiKey, passport.deleteAPITest);

router.post('/authenticate', passport.authenticate);
router.post('/swagger/authenticate', sign.checkApiKey, passport.authenticate);


router.post('/singleRecord', passport.isLoggedIn, multer.single("Image"), async function(req, res) {
    var {date, cost, time, designerName, etc, grade} = req.body;
    var user = await User.findOne({where : {id : req.user.id}});
    if(designerName) {
        var designer = await Designer.findOne({where : { designer :designerName}})
        var record = await user.createRecord({ date, cost, time, etc, grade, DesignerId : designer.id })
        var image = await record.createImage({ img1 : req.file.filename})
        var result = {record, image}
    } else {
        var record = await user.createRecord({ date, cost, time, etc, grade })
        var image = await record.createImage({ img1 : req.file.filename})
        var result = {record, image} 
    }
    res.send(result)
})

router.post('/swagger/singleRecord', sign.checkApiKey, passport.isLoggedIn, multer.single("Image"), async function(req, res) {
    var {date, cost, time, designerName, etc, grade} = req.body;
    var user = await User.findOne({where : {id : req.user.id}});
    if(designerName) {
        var designer = await Designer.findOne({where : { designer :designerName}})
        var record = await user.createRecord({ date, cost, time, etc, grade, DesignerId : designer.id })
        var image = await record.createImage({ img1 : req.file.filename})
        var result = {record, image}
    } else {
        var record = await user.createRecord({ date, cost, time, etc, grade })
        var image = await record.createImage({ img1 : req.file.filename})
        var result = {record, image}
    }
    res.send(result)
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

router.post('/designer',passport.isLoggedIn, async function(req, res) {
    var {designer, salon} = req.body;
    var user = await User.findOne({wherer : {id : req.user.id}});
    var designerRecord = await user.createDesigner({designer, salon})
    res.send(designerRecord)
})

router.post('/swagger/designer', sign.checkApiKey, passport.isLoggedIn, async function(req, res) {
    var {designer, salon} = req.body;
    var user = await User.findOne({wherer : {id : req.user.id}});
    var designerRecord = await user.createDesigner({designer, salon})
    res.send(designerRecord)
})

router.post('/test', test);
router.post('/swagger/test', sign.checkApiKey, test);



module.exports = router;