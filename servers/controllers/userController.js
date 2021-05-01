"use strict";

import db from "../db.js";
import User from "../models/user.js";

const login = async (req, res) => {
  try {
    const { email = "", password = "" } = req.body;
    const { user } = await db
      .auth()
      .signInWithEmailAndPassword(email, password);
    const userInfo = new User(
      user.uid,
      user.email,
      user.displayName,
      user.photoURL,
      user.phoneNumber
    );
    res.status(200).send(userInfo);
  } catch (error) {
    res.status(500).send(error);
  }
};

const register = async (req, res) => {
  try {
    const { email = "", password = "" } = req.body;
    const user = await db
      .auth()
      .createUserWithEmailAndPassword(email, password);
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

export { login, register };
