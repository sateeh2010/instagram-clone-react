import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA1HJ7BrzrkWtlbhWq7_GvaUTJ5mzOXYYQ",
    authDomain: "instagram-clone-bda1f.firebaseapp.com",
    databaseURL: "https://instagram-clone-bda1f-default-rtdb.firebaseio.com",
    projectId: "instagram-clone-bda1f",
    storageBucket: "instagram-clone-bda1f.appspot.com",
    messagingSenderId: "22141811331",
    appId: "1:22141811331:web:3e13112fe2010af5c3f9b6",
    measurementId: "G-MGH1PYKGEW"
  });


const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage }