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
          doc.data().image,
          doc.data().likeNumber,
          doc.data().comments
        );
        listPosts.push(post);
      });
      res.status(200).send({
        data: listPosts,
        status: 1,
      });
    }
  } catch (error) {
    res.status(500).send(error.code);
  }
};

/**
 * get a post by postId
 * @param  req request from client
 * @param  res response
 * @return a post
 */
const getPostById = async (req, res) => {
  try {
    const { postId } = req.body;
    const posts = await firestore.collection("posts");
    const data = await posts.get(); // i can't get a doc by id like this firestore.collection("posts").doc(id).get()
    const post = {};
    if (data.empty) {
      res.status(404).send("No post record found");
    } else {
      data.forEach((doc) => {
        if (doc.id === postId) {
          res.status(200).send({
            ...post,
            id: doc.id,
            title: doc.data().title,
            author: doc.data().author,
            body: doc.data().body,
            createdAt: doc.data().createdAt,
            image: doc.data().image,
            likeNumber: doc.data().likeNumber,
            comments: doc.data().comments,
          });
        }
      });
      res.status(200).send(post);
    }
  } catch (error) {
    if (error.code === "ERR_HTTP_HEADERS_SENT") {
      return null;
    } else {
      res.status(500).send(error.code);
    }
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
    await firestore
      .collection("posts")
      .doc()
      .set({
        ...req.body,
        likeNumber: 0,
        comments: "",
      });
    res.status(200).send({
      data: req.body,
      status: 1,
    });
  } catch (error) {
    res.status(500).send(error.code);
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
    const postId = req.body.postId;
    const post = await firestore.collection("posts").doc(postId);
    if (!post.exists) {
      res.status(404).send("Post with given id not found");
    } else {
      await post.update(req.body);
      res.status(200).send({
        message: "Updated post successfully",
        data: post,
      });
    }
  } catch (error) {
    res.status(500).send(error.code);
  }
};

export { getPosts, getPostById, createPost, updatePost };
