const express = require("express")
const route = express.Router()
const productCategoryModel = require("../Models/productCategorySchema")

route.post("/add-product-data", async (req, res) => {
    try {
        const newProduct = productCategoryModel(req.body)
        newProduct.save()
        res.status(201).json({
            message:`Product created and added successfully`
        })
    } catch (error) {
        res.status(500).json({message:`Internal server error or product not created ${error.message}`})   
    }
})

route.get("/fetched-product/:category", async (req, res) => {
    try {
        const category = req.params.category;
        const allProduct = await productCategoryModel.find({category})

        res.status(200).json({
            message:`product successfully fetched by ${category}`,
            data: allProduct
        })
    } catch (error) {
        res.status(500).json({
            message:`Internal server error or product not fetched by category ${error.message}`
        })
    }
})

route.get("/fetched-single-product/:id", async (req, res) => {
    try {
        const {id, category} = req.params;
        console.log(id)
        //const category = req.params.category;
        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).json({ message: "Invalid product ID format" });
        }

        const product = await productCategoryModel.findById({_id: id, category: category})
        console.log(product)
        if(!product){
            return res.status(404).json({message:`Product not found`})
        }

        res.status(200).json({
            message:`Product fetched by id and category successfully`,
            data: product
        })
    } catch (error) {
        res.status(500).json({
            message:`Internal server error ${error.message}`
        })
    }
})

module.exports = route;