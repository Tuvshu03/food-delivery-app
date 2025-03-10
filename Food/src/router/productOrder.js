import express from 'express'
import { createProductOrder } from '../resolvers/product-order/create-order.js';
import { getProductOrder } from '../resolvers/product-order/get-order.js';
import { deleteProductOrder } from '../resolvers/product-order/delete-order.js';
import { updateProductOrder } from '../resolvers/product-order/update-order.js';
import { getAllOrder } from '../resolvers/product-order/get-all-orders.js';

export const productOrderRouter = express.Router();

productOrderRouter.post('/', createProductOrder);
productOrderRouter.get('/users', getProductOrder);
productOrderRouter.delete('/', deleteProductOrder);
productOrderRouter.put('/', updateProductOrder);
productOrderRouter.get('/', getAllOrder);
