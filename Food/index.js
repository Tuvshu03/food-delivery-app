import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import { userRouter } from "./src/router/userRouter.js";
import { productsCategoryRouter } from "./src/router/productCategory.js";
import { productRouter } from "./src/router/productRouter.js";


const app = express();
app.use(express.json());
const port = 8000;
dotenv.config()

mongoose.connect(process.env.MONGO_CONNECTION_STRING).then(()=>{
    console.log("database connenction established");
});

app.use("/users", userRouter);
app.use("/category", productsCategoryRouter)
app.use("/product", productRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});