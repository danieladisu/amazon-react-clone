/** @format */

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDRNcvQSHOG67S9r8H0BESOGd0SDD2_4EI",
  authDomain: "clone-8100d.firebaseapp.com",
  projectId: "clone-8100d",
  storageBucket: "clone-8100d.appspot.com",
  messagingSenderId: "487468412712",
  appId: "1:487468412712:web:b63109f28286ff0593ea1d",
  measurementId: "G-LXZYME3MNL",
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();

export { auth, db };
// Successful payment
// 4242424242424242
// Failed payment
// 4000000000009995
// Requires authentication
// 4000002500003155
