import fbconf from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

  var firebaseConfig = {
    apiKey: "AIzaSyBiUb-yfhc3N5dAGssmtFTP5Og6KAyVW40",
    authDomain: "simple-firebase-ampm.firebaseapp.com",
    projectId: "simple-firebase-ampm",
    storageBucket: "simple-firebase-ampm.appspot.com",
    messagingSenderId: "201004663253",
    appId: "1:201004663253:web:df38bc06ce41a0ef0abd5c",
    measurementId: "G-ZREWC0BFWP"
  };

  fbconf.initializeApp(firebaseConfig);
  

  export default fbconf