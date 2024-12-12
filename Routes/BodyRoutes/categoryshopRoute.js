const express = require("express");
const router = express.Router();

const categoryshopImgModel = require("../../Models/BodySchema/categoryshopSchema")

router.post("/categoryshop-img-add", async (req, res) => {
    try {
        const { img } = req.body
        const imgExist = await categoryshopImgModel.findOne({img})
        if(imgExist){
            return res.status(400).json({
                message: `image already Exist`
            })
        }

        const addImg = await categoryshopImgModel(req.body);
        addImg.save()

        res.status(201).json({
            message:`imge added successfully`
        })
    } catch (error) {
        res.status(500).json({message:`post request failed ${error.message}`})
    }
})

router.get("/fetching-categoryshopImg", async (_, res) => {
    try {
        const allImg = await categoryshopImgModel.find()
        res.status(200).json({
            message: `Fetched all images`,
            data: allImg
        })
    } catch (error) {
        res.status(500).json({
            message:`Error in fetching imgs ${error.message}`
        })
    }
})

module.exports = router