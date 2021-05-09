"use strict";

import FS from "fs";
import Path from "path";

import db from "../db.js";
import User from "../models/user.js";

/**
 * handle login with email and pa
 * @param {*} req
 * @param {*} res
 * @return status and payload
 */
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
    res.status(500).send({
      message: error.code,
      status: 9,
    });
  }
};

/**
 * handle register a new user with email and pa
 * @param {*} req
 * @param {*} res
 * @return status and payload
 */
const register = async (req, res) => {
  try {
    const { email = "", password = "" } = req.body;
    const user = await db
      .auth()
      .createUserWithEmailAndPassword(email, password);

    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error.code);
  }
};

/**
 * handle update user info
 * @param {*} req
 * @param {*} res
 * @return status and payload
 */
const updateProfile = async (req, res) => {
  try {
    const { username = "", phone = "", avatar = "" } = req.body;
    // get current user
    const currentUser = db.auth().currentUser;
    // update user with given infos from request
    await currentUser.updateProfile({
      displayName: username,
      photoURL: avatar,
      phoneNumber: phone,
    });

    res.status(200).send(req.body);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.code });
  }
};

/**
 * handle download CV
 * @param {*} req
 * @param {*} res
 * @return file
 */
const downloadCV = async (req, res) => {
  try {
    const pathFile = Path.dirname("./files");
    const stream = await FS.createReadStream(`${pathFile}/job.pdf`);
    stream.on("error", (error) => console.log("Error", error));
    stream.on("ready", () => {
      stream.read();
    });
    const stat = await FS.statSync(`${pathFile}/job.pdf`);
    console.log(stat)
    res.setHeader("Content-Length", stat.size);
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=job.pdf");
    file.pipe(res);
    // res.status(200).send(file);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.code });
  }
};

export { login, register, updateProfile, downloadCV };
