"use strict";

import express from "express";
import {
  getPosts,
  createPost,
  updatePost,
  getPostById,
} from "../controllers/postController.js";
const postRouter = express.Router();

postRouter.get("/list", getPosts);
postRouter.post("/post", getPostById)
postRouter.post("/create", createPost);
postRouter.post("/update", updatePost);

export default postRouter;
