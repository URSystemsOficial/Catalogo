import * as firebase from 'firebase';

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDf_S8n4uS5VbtAGzCMFA2yXSg0h2d5PC4",
    authDomain: "ecommerce-f1e9a.firebaseapp.com",
    databaseURL: "https://ecommerce-f1e9a.firebaseio.com",
    projectId: "ecommerce-f1e9a",
    storageBucket: "ecommerce-f1e9a.appspot.com",
    messagingSenderId: "952654872816"
  };
  firebase.initializeApp(config);

  export default firebase;
