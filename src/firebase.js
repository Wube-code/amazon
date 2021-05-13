import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASH8mUYkJntGF2WI_xgqL8MuMaRwRMf9g",
  authDomain: "from-38f94.firebaseapp.com",
  projectId: "from-38f94",
  storageBucket: "from-38f94.appspot.com",
  messagingSenderId: "894457754405",
  appId: "1:894457754405:web:cfc41ded736ef6f663e0cc",
  measurementId: "G-8R8YXNXG2B"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
