"use strict";

import express from "express";
import {
  login,
  register,
  updateProfile,
} from "../controllers/userController.js";
const userRouter = express.Router();

userRouter.post("/login", login);
userRouter.post("/register", register);
userRouter.post("/update-profile", updateProfile);

export default userRouter;
