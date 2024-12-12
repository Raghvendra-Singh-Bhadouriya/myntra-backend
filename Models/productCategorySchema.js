const mongoose = require("mongoose")

const productCategorySchema = new mongoose.Schema({
    img:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        min:1,
        max:5
    },
    price:{
        type:Number,
        required:true,
        validate:{
            validator:function(value){
                return value <= this.mrp
            },
            message:"Price must be less than or equal to MRP"
        }
    },
    mrp:{
        type:Number
    },
    off:{
        type:Number
    },
    category:{
        type:String,
        required:true
    },
    size:[
        {
            type:Number
        }
    ]
},{
    versionKey:false
})

const productCategoryModel = mongoose.model("productCategory", productCategorySchema)

module.exports = productCategoryModel;