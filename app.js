require("dotenv").config();
const express = require("express")
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 3000;
const connection = require("./config/db")
const userRouter = require("./Routes/userRoute")
const topImgRouter = require("./Routes/BodyRoutes/topSliderRoute")
const brandBagRouter = require("./Routes/BodyRoutes/bagbrandsRoute")
const globalBrandRouter = require("./Routes/BodyRoutes/globalbrandRoute")
const categoryshopRouter = require("./Routes/BodyRoutes/categoryshopRoute")
const productCategoryRouter = require("./Routes/productCategoryRoute.js")

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
app.use(express.json())
app.use('/', userRouter)
app.use("/", topImgRouter)
app.use("/", brandBagRouter)
app.use("/", globalBrandRouter)
app.use("/", categoryshopRouter)
app.use("/", productCategoryRouter)

app.listen(PORT, async () => {
    try {
        await connection()
        console.log(`Server is running on port ${PORT}`)
    } catch (error) {
        console.log(`Server is not connected ${error.message}`)
    }
})
