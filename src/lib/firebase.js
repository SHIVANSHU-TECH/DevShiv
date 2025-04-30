// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmE35_PD6f_EdxGRkbgL3q3pqcEs0TQIY",
  authDomain: "devshiv-e4613.firebaseapp.com",
  projectId: "devshiv-e4613",
  storageBucket: "devshiv-e4613.firebasestorage.app",
  messagingSenderId: "752454363588",
  appId: "1:752454363588:web:b467d8661d680f4e7f5c91",
  measurementId: "G-WPX4B1RZK3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export { db };