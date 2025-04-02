import express from 'express'
import { createProductCategory } from '../resolvers/product-category/create-product-category.js'
import { getProductCategory } from '../resolvers/product-category/get-product-category.js';
import { updateProductCategory } from '../resolvers/product-category/uptade-product-category.js';
import { deleteProductCategory } from '../resolvers/product-category/delete-product-category.js';
import { checkAdminUsers } from '../middlewares/checkAdmin.js';

export const productsCategoryRouter = express.Router();

productsCategoryRouter.post('/',checkAdminUsers, createProductCategory);
productsCategoryRouter.get('/', getProductCategory);
productsCategoryRouter.put('/', checkAdminUsers, updateProductCategory);
productsCategoryRouter.delete('/', checkAdminUsers, deleteProductCategory);

