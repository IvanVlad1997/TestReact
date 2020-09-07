import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyDR7qULdYaOYb2CGl2351t9F5oQUmRMbRM",
  authDomain: "test1-f5678.firebaseapp.com",
  databaseURL: "https://test1-f5678.firebaseio.com",
  projectId: "test1-f5678",
  storageBucket: "test1-f5678.appspot.com",
  messagingSenderId: "86752951218",
  appId: "1:86752951218:web:38a35b2a4a5cf6c50702ab",
  measurementId: "G-HYENWWF16E"
};
firebase.initializeApp(config);

export default firebase 