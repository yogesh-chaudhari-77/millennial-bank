const firebase = require('firebase');
require('firebase/auth');
require('firebase/database');


const firebaseConfig = {
  apiKey: "AIzaSyCB-KbYrLWbcoaBrkN3pz4hSm7WsXt1Ba4",
  authDomain: "millennial-bank.firebaseapp.com",
  projectId: "millennial-bank",
  storageBucket: "millennial-bank.appspot.com",
  messagingSenderId: "848144184079",
  appId: "1:848144184079:web:3547ed9f13b440e852847a"
};

firebase.initializeApp(firebaseConfig);

module.exports = firebase;