import firebase from 'firebase';
import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'

const config = {
    apiKey: "AIzaSyCUzihLoChW0rRdWZsvEEVJ2KSOADRAy24",
    authDomain: "devflowoauth.firebaseapp.com",
    databaseURL: "https://devflowoauth.firebaseio.com",
    projectId: "devflowoauth",
    storageBucket: "devflowoauth.appspot.com",
    messagingSenderId: "263230098779",
    appId: "1:263230098779:web:9d8e9b36e3de57a1f09e7e",
    measurementId: "G-F6SZ9GVV87"
  };

const fire = firebase.initializeApp(config);
export default fire;

