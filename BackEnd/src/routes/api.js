var express = require('express');
var router = express.Router();
var show = require("@jongjun/console")

var passport = require('../middlewares/passport'),
    sign = require('../function/CheckAPIKey'),
    multer = require('../../multer/multer'),
    test = require('../middlewares/test.js');


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


router.post('/test', test);
router.post('/swagger/test', sign.checkApiKey, test);



module.exports = router;