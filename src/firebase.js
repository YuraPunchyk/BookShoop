import React from 'react'
import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyCzg0_3pAMkSlBASk2T3QDuBkBKf_jcKYU",
    authDomain: "just-book-shop.firebaseapp.com",
    databaseURL: "https://just-book-shop.firebaseio.com",
    projectId: "just-book-shop",
    storageBucket: "just-book-shop.appspot.com",
    messagingSenderId: "639802711797",
    appId: "1:639802711797:web:bb9791e2fea7813823efbc",
    measurementId: "G-WZNDG6QCMG"
  };
  firebase.initializeApp(firebaseConfig);

  export default firebase