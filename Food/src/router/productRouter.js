import express from 'express'
import { createProduct } from '../resolvers/products/create-product.js'
import { getProduct } from '../resolvers/products/get-product.js';

export const productRouter = express.Router();

productRouter.post('/', createProduct);
productRouter.get('/', getProduct);