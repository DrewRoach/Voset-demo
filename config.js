// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxLZIpimmGjxrCjE4o1gGmGSEHrV0L9z0",
  authDomain: "voset-3f5ac.firebaseapp.com",
  projectId: "voset-3f5ac",
  storageBucket: "voset-3f5ac.appspot.com",
  messagingSenderId: "478015112534",
  appId: "1:478015112534:web:3a23de9f432cae81a442f7",
  measurementId: "G-C24JHB3HG5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
