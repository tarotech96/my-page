"use strict";

import firebase from "firebase";
import config from "./config.js";

const db = firebase.initializeApp(config.firebaseConfig);

export default db;
