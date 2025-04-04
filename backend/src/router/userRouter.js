import express from "express";
import { createUser } from "../resolvers/users/create-user.js";
import { getUser } from "../resolvers/users/get-user.js";
import { updateUser } from "../resolvers/users/uptade-user.js";
import { deleteUser } from "../resolvers/users/delete.user.js";
import { login } from "../resolvers/users/login.js";
import { validateEmailMiddleware } from "../middlewares/validateEmail.js";
import { authorizationMiddleware } from "../middlewares/middlewareUsers.js";

export const userRouter = express.Router();

userRouter.post("/sign-up", validateEmailMiddleware, createUser);
userRouter.get("/", authorizationMiddleware, getUser);
userRouter.put("/", authorizationMiddleware, updateUser);
userRouter.delete("/", authorizationMiddleware, deleteUser);
userRouter.post("/login", validateEmailMiddleware, login);
