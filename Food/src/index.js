import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { userRouter } from "./router/userRouter.js";
import { productsCategoryRouter } from "./router/productCategory.js";
import { productRouter } from "./router/productRouter.js";
import { productOrderRouter } from "./router/productOrder.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
const port = 3001;
dotenv.config();

mongoose.connect(process.env.MONGO_CONNECTION_STRING).then(() => {
  console.log("database connenction established");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/users", userRouter);
app.use("/category", productsCategoryRouter);
app.use("/product", productRouter);
app.use("/product-order", productOrderRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
