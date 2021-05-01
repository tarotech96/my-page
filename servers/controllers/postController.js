"use strict";

import firebase from "../db.js";
import Post from "../models/post.js";
const firestore = firebase.firestore();

/**
 * Handle get all posts from database
 * @param req request from client
 * @param res response
 * @returns list posts, status
 */
const getPosts = async (req, res) => {
  try {
    const posts = await firestore.collection("posts");
    const data = await posts.get();
    const listPosts = [];
    if (data.empty) {
      res.status(404).send("No post record found");
    } else {
      data.forEach((doc) => {
        const { data } = doc.data();
        const post = new Post(
          doc.id,
          data.title,
          data.author,
          data.body,
          data.createdAt,
          data.image
        );
        listPosts.push(post);
      });
      res.status(200).send(listPosts);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

/**
 * Handle add a new post
 * @param req request from client
 * @param res response
 * @returns new post, status
 */
const createPost = async (req, res) => {
  try {
    await firestore.collection("posts").doc().set({ data: req.body });
    res.status(200).send({
      message: "Inserted new post successfully",
      data: req.body,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

/**
 * Handle update a post
 * @param req request from client
 * @param res response
 * @returns updated post, status
 */
const updatePost = async (req, res) => {
  try {
    const postId = req.params.postId;
    const post = await firestore.collection("posts").doc(postId);
    if (!post.exists) {
      res.status(404).send("Post with given id not found");
    } else {
      await post.update({ data: req.body });
      res.status(200).send({
        message: "Updated post successfully",
        data: post,
      });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export { getPosts, createPost, updatePost };
