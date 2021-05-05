"use strict";

class User {
  constructor(id, email, username, image, phone) {
    this.id = id;
    this.email = email;
    this.username = username;
    this.avatar = image;
    this.phone = phone;
  }
}

export default User;