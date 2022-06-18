var express = require('express');
var router = express.Router();

var passport = require('../middlewares/passport');
const sign = require('../function/CheckAPIKey');


router.post('/join', passport.join, passport.authenticate);
router.post('/swagger/join', sign.checkApiKey, passport.join, passport.authenticate);


router.post('/test', passport.test);
router.post('/joinDelete', passport.delete)
router.post('/authenticate', passport.authenticate);


module.exports = router;
