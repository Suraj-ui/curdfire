import * as firebase from "firebase";
import "../node_modules/firebase/firebase";

var firebaseConfig = {
    apiKey: "AIzaSyC-43Fy1Ohl2irSs0GBypwM5VzEHaU799c",
    authDomain: "democurd-4fc2b.firebaseapp.com",
    databaseURL: "https://democurd-4fc2b.firebaseio.com",
    projectId: "democurd-4fc2b",
    storageBucket: "democurd-4fc2b.appspot.com",
    messagingSenderId: "665999741335",
    appId: "1:665999741335:web:2832cd63a57044d6af34d2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.database();