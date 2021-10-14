
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyC4G_N3mB7ivLTyLfgYmeUHgqsRdrUjgOo",
    authDomain: "reactnativefirebase-c9724.firebaseapp.com",
    databaseURL: "https://reactnativefirebase-c9724-default-rtdb.firebaseio.com",
    projectId: "reactnativefirebase-c9724",
    storageBucket: "reactnativefirebase-c9724.appspot.com",
    messagingSenderId: "219945897356",
    appId: "1:219945897356:web:21913f202b6b2d69cf1aa9",
    measurementId: "G-6XRGWP1QJP"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);