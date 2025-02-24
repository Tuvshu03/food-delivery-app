import express from 'express'
import { createUser } from '../resolvers/users/create-user.js'
import { getUser } from '../resolvers/users/get-user.js'

export const userRouter = express.Router()

userRouter.post('/', createUser)
userRouter.get('/', getUser)