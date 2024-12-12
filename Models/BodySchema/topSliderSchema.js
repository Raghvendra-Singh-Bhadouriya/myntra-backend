const mongoose = require("mongoose")

const topImgSchema = new mongoose.Schema({
    img:{
        type: String
    }
},{
    versionKey:false,
})

const userModel = mongoose.model("topsliderImge", topImgSchema)

module.exports = userModel;