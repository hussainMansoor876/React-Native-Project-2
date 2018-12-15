import * as firebase from 'firebase';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA8E49m3CsZq6mUFtU8Nf7uR0P-a9nCxvI",
    authDomain: "react-native-project-2.firebaseapp.com",
    databaseURL: "https://react-native-project-2.firebaseio.com",
    projectId: "react-native-project-2",
    storageBucket: "react-native-project-2.appspot.com",
    messagingSenderId: "63475082188"
  };
  firebase.initializeApp(config);

export default firebase;