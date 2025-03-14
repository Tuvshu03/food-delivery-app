import express from "express";
import { createProduct } from "../resolvers/products/create-product.js";
import { getProduct } from "../resolvers/products/get-product.js";
import { updateProducts } from "../resolvers/products/update-product.js";
import { deleteProduct } from "../resolvers/products/delete-product.js";

export const productRouter = express.Router();

productRouter.post("/", createProduct);
productRouter.get("/", getProduct);
productRouter.put("/", updateProducts);
productRouter.delete("/", deleteProduct);

