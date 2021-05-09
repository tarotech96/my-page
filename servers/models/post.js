"use strict";
class Post {
  constructor(id, title, author, body, createdAt, imgUrl, likeNumber, comments) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.body = body;
    this.createdAt = createdAt;
    this.imgUrl = imgUrl;
    this.likeNumber = likeNumber;
    this.comments = comments;
  }
}

export default Post;
