const mongoose = require("mongoose")

const brandBagSchema = new mongoose.Schema({
    img:{
        type: String
    }
},{
    versionKey:false,
})

const brandBagImgModel = mongoose.model("brandBagImg", brandBagSchema)

module.exports = brandBagImgModel;