import express from 'express'
import { createProductCategory } from '../resolvers/product-category/create-product-category.js'

export const productsCategoryRouter = express.Router();

productsCategoryRouter.post('/', createProductCategory)