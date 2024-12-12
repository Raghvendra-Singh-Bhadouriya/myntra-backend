const express = require("express");
const router = express.Router();

const userModel = require("../Models/userSchema")

router.post("/login", async (req, res) => {
    try {
        const { number } = req.body;
console.log(number)
        if(number.length > 10){
            return res.status(400).json({message:`Number must be 10 digits only`})
        }

        const existUser = await userModel.findOne({number})
        if(!existUser){
            const newUser = new userModel(req.body)
            newUser.save()
            return res.status(201).json({
            message: `User Registered Successfully`,
            data: newUser   
            })
        }
        //console.log(existUser)

        res.status(200).json({
            message:`User LoggedIn Successfully`
        })
    } catch (error) {
        res.status(500).json({message:`Login Failed ${error.message}`})
    }
})

router.get("/fetched-alluser", async (_, res) => {
    try {
        const users = await userModel.find()
        if(!users){
            return res.status(404).json({message: `Users not found`})
        }

        res.status(200).json({
            message: `All users fetched successfully`,
            data: users
        })
    } catch (error) {
        res.status(500).json({
            message: `Error in fetching Users ${error.message}`
        })
    }
})

module.exports = router