var express = require('express'),
    router = express.Router();

const Swagger = require('../modules/Swagger.js');
const sign = require('../function/CheckAPIKey');

/* GET home page. */
router.use('/' , Swagger.Ui.serve, Swagger.Ui.setup(Swagger.specs), sign.checkApiKey);


module.exports = router;