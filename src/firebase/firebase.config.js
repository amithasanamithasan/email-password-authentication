// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2HChvPYURdY_2F9iRqGaTz4mYNGoCJ5c",
  authDomain: "email-password-authentic-1a5c9.firebaseapp.com",
  projectId: "email-password-authentic-1a5c9",
  storageBucket: "email-password-authentic-1a5c9.appspot.com",
  messagingSenderId: "24500307765",
  appId: "1:24500307765:web:a9b8ce776908da8c5aae7c",
  measurementId: "G-RX2H4ST3RZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;