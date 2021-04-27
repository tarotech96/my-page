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
        const post = new Post(
          doc.id,
          doc.data().title,
          doc.data().author,
          doc.data().body,
          doc.data().createdAt,
          doc.data().imgUrl
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
    const { payload } = req.body;
    console.log(payload)
    await firestore.collection("posts").doc().set(payload);
    res.status(200).send({
      message: "Inserted new post successfully",
      data: newPost,
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
    const { payload } = req.body;
    const post = await firestore.collection("posts").doc(postId);
    if (!post.exists) {
      res.status(404).send("Post with given id not found");
    } else {
      await post.update(payload);
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
