import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB0NqejqWkRMgwLCre-D2S0_eYHGbHE3nE",
  authDomain: "re-events-246fa.firebaseapp.com",
  databaseURL: "https://re-events-246fa.firebaseio.com",
  projectId: "re-events-246fa",
  storageBucket: "re-events-246fa.appspot.com",
  messagingSenderId: "849620681299",
  appId: "1:849620681299:web:918dc0bb0621915e61fca6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;