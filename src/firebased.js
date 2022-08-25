// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAA3Ti1ELQKgWTqI0wlNZ7-OiPQTh5qaYQ",
  authDomain: "challange-6474c.firebaseapp.com",
  databaseURL: "https://challange-6474c-default-rtdb.firebaseio.com",
  projectId: "challange-6474c",
  storageBucket: "challange-6474c.appspot.com",
  messagingSenderId: "658497282637",
  appId: "1:658497282637:web:93f3bd331ebb3f0b183204",
  measurementId: "G-67PJWWP7SM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
console.log(auth);

// auth.createUserWithEmailAndPassword("email", "password").then((auth) => {
//         //   it successfully created a new user with email and password
//         console.log(auth);
//       })

export { db, auth }
