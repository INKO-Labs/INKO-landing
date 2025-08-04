// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAADVkK_DfcYSJKXXMF90QQDaaZAwnEmgg",
  authDomain: "inko-landing.firebaseapp.com",
  projectId: "inko-landing",
  storageBucket: "inko-landing.firebasestorage.app",
  messagingSenderId: "889801830125",
  appId: "1:889801830125:web:d2b4e7373b373359dda6e4",
  measurementId: "G-XP99DZ3FVD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const store = getFirestore(app);