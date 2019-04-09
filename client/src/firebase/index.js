import firebase from 'firebase/app';
import 'firebase/storage';

var config = {
    apiKey: "AIzaSyD1GZGOcsAbR2z-6-h5RNFT46wRntk1tWw",
    authDomain: "aiesec-31b99.firebaseapp.com",
    databaseURL: "https://aiesec-31b99.firebaseio.com",
    projectId: "aiesec-31b99",
    storageBucket: "aiesec-31b99.appspot.com",
    messagingSenderId: "990619336042"
  };
  firebase.initializeApp(config);

  const storage = firebase.storage();

  export {
      storage, firebase as default
  }
