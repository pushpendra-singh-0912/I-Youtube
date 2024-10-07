// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAL9d0cM4m_ouqiRktqL7woWmalpW7aJn8",
  authDomain: "push-c641d.firebaseapp.com",
  projectId: "push-c641d",
  storageBucket: "push-c641d.appspot.com",
  messagingSenderId: "896726672399",
  appId: "1:896726672399:web:ae6db3c4df0e779691ef7a",
  measurementId: "G-BQ3L13ZQHS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);