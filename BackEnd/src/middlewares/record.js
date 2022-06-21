var User = require('../../../DB/sequelize/models/User')
var Designer = require('../../../DB/sequelize/models/Designer')
var Cut = require('../../../DB/sequelize/models/Cut')
var Perm = require('../../../DB/sequelize/models/Perm')
var Dyeing = require('../../../DB/sequelize/models/Dyeing')

var Post = {
    
    record  : async function(req, res) {
        var category = req.params.category
        var user = await User.findOne({where : {id : req.user.id}});
        var {record, image} = await Post.recordDesigner(req, category, user)
        var result = {record, image}
        result[`${category}`] = await Post.recordCategory(req, category, record)
        res.send(result)
    },
    
    recordDesigner :  async function(req, category, userInstance) {
        var {date, cost, time, designerName, etc, grade} = req.body;
        if(designer){
            var designer = await Designer.findOne({where : { designer : designerName }})
            var record = await userInstance.createRecord({ date, cost, time, category, etc, grade, DesignerId : designer.id })
            var image = await record.createImage({ img1 : req.file.filename})
            var result = {record, image}
            return result
        } else {
            var record = await userInstance.createRecord({ date, cost, time, category, etc, grade })
            var image = await record.createImage({ img1 : req.file.filename})
            var result = {record, image}
            return result
        }
    },
    
    recordCategory : async function(req, category, record) {
        switch (category) 
        {
            case "cut" : 
                var { cutName, cutLength } = req.body
                var cut = await Cut.create({ name :cutName , length : cutLength , RecordId : record.id})
                return cut;
            case "perm" : 
                var { permName, permTime, permHurt } = req.body 
                var perm = await Perm.create({name : permName, time : permTime, hurt : permHurt, RecordId : record.id})
                return perm
            case "dyeing" : 
                var { dyeingColor, dyeingDecolorization, dyeingTime, dyeingHurt } = req.body 
                var dyeing = await Dyeing.create({color : dyeingColor, dyeingDecolorization, time : dyeingTime, hurt : dyeingHurt, RecordId : record.id})
                return dyeing
        }
    },
    designer : async function(req, res) {
        var {designer, salon} = req.body;
        var user = await User.findOne({wherer : {id : req.user.id}});
        var designerRecord = await user.createDesigner({designer, salon})
        res.send(designerRecord)
    }

}

var Get = {
    record : async function(req, res) {
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
    }
}


var Update = {

}

module.exports = {Post, Get, Update};
