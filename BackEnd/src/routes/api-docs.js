var express = require('express'),
    router = express.Router();

    
const Swagger = require('../../swagger/Swagger.js');

router.use('/', Swagger.Ui.serve, Swagger.Ui.setup(Swagger.specs, { explorer : true}));


module.exports = router;