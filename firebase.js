// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVUhxxyErT4Gkd9RrSxdvlFnNd1iH9rXI",
  authDomain: "instagram-37357.firebaseapp.com",
  projectId: "instagram-37357",
  storageBucket: "instagram-37357.appspot.com",
  messagingSenderId: "504873765099",
  appId: "1:504873765099:web:ac79863bff32632d5656ae",
  measurementId: "G-R78KTBJ2SJ"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig): getApp();
const db = getFirestore();
const storage = getStorage();

export {app, db, storage};