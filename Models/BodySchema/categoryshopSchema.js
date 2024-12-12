const mongoose = require("mongoose")

const categoryShopSchema = new mongoose.Schema({
    img:{
        type: String
    }
},{
    versionKey:false,
})

const categoryShopImgModel = mongoose.model("categoryShopImg", categoryShopSchema)

module.exports = categoryShopImgModel;