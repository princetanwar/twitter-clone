import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA3-JruNJT9RvrHwzmZVc52kf2WoRx2-qY",
  authDomain: "twitter-clone-96d45.firebaseapp.com",
  databaseURL: "https://twitter-clone-96d45.firebaseio.com",
  projectId: "twitter-clone-96d45",
  storageBucket: "twitter-clone-96d45.appspot.com",
  messagingSenderId: "16164498204",
  appId: "1:16164498204:web:0168d6ced9ba097b42a8d9",
  measurementId: "G-LP8RDW8SEH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
