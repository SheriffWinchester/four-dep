import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAkGKky9DB7Rmnii7J5lwM6WesvCuIB6lM",
    authDomain: "four-dep.firebaseapp.com",
    projectId: "four-dep",
    storageBucket: "four-dep.appspot.com",
    messagingSenderId: "173020545355",
    appId: "1:173020545355:web:3aee0f37e4fe4dda4b68ce",
    measurementId: "G-QQH2L72S3W"
  };

  if(!firebase.apps.lenght) {
      firebase.initializeApp(firebaseConfig)
  }

  export const firestore = firebase.firestore();
  export const storage = firebase.storage();