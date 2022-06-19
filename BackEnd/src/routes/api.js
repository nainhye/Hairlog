var express = require('express');
var router = express.Router();

var passport = require('../middlewares/passport'),
    sign = require('../function/CheckAPIKey'),
    test = require('../middlewares/test.js');


router.post('/join', passport.join);
router.post('/swagger/join', sign.checkApiKey, passport.join);

router.post('/joinDelete', passport.deleteAPITest);
router.post('/swagger/joinDelete', sign.checkApiKey, passport.deleteAPITest);

router.post('/authenticate', passport.authenticate);
router.post('/swagger/authenticate', sign.checkApiKey, passport.authenticate);


router.post('/test', test);
router.post('/swagger/test', sign.checkApiKey, test);



module.exports = router;