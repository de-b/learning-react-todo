import firebase from "firebase/app";
import "firebase/database";

import config from "./firebase.config";

firebase.initializeApp(config);

export const database = firebase.database();

export default {
  database,
};
