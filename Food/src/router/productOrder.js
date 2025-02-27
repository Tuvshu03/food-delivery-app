import express from 'express'
import { createProductOrder } from '../resolvers/product-order/create-order.js';
import { getProductOrder } from '../resolvers/product-order/get-order.js';

export const productOrderRouter = express.Router();

productOrderRouter.post('/', createProductOrder);
productOrderRouter.get('/', getProductOrder)
