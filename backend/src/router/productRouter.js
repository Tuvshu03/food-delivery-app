import express from "express";
import { createProduct } from "../resolvers/products/create-product.js";
import { getProduct } from "../resolvers/products/get-product.js";
import { updateProducts } from "../resolvers/products/update-product.js";
import { deleteProduct } from "../resolvers/products/delete-product.js";
import { checkAdminUsers } from "../middlewares/checkAdmin.js";

export const productRouter = express.Router();

productRouter.post("/", checkAdminUsers, createProduct);
productRouter.get("/", getProduct);
productRouter.put("/", checkAdminUsers, updateProducts);
productRouter.delete("/", checkAdminUsers, deleteProduct);

