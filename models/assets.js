const mongoose = require("mongoose");

const assetsSchema =  new mongoose.Schema({

    originalName: {type:String},
    data: {type: Buffer},
    mimetype: {type: String}
},{timestamps:true})


module.exports = mongoose.model('assets',assetsSchema)