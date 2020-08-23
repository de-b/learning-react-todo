import firebase from "firebase";
import "firebase/database";
import { firebaseConfig } from "./firebase.config";

const db = firebase.initializeApp(firebaseConfig);

export default db;
