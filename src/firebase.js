import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB18OLJCfzqhU-n43mOJCkFIuLky3WqcJ0",
    authDomain: "flight-booking-a41e0.firebaseapp.com",
    databaseURL: "https://flight-booking-a41e0.firebaseio.com",
    projectId: "flight-booking-a41e0",
    storageBucket: "flight-booking-a41e0.appspot.com",
    messagingSenderId: "1009223515164",
    appId: "1:1009223515164:web:01155096bb52f7c67573d9",
    measurementId: "G-68L285036P"
  };

  //Initialize firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  //Connecting to Firebase Auth System
  const auth = firebaseApp.auth();

  export {auth};
