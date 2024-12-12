const mongoose = require("mongoose")

const globalBrandSchema = new mongoose.Schema({
    img:{
        type: String
    }
},{
    versionKey:false,
})

const globalBrandImgModel = mongoose.model("globalBrandImg", globalBrandSchema)

module.exports = globalBrandImgModel;