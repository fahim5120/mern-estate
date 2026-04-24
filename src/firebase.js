// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-4c65e.firebaseapp.com",
  projectId: "mern-estate-4c65e",
  storageBucket: "mern-estate-4c65e.firebasestorage.app",
  messagingSenderId: "942775269977",
  appId: "1:942775269977:web:e666a2136659e163a1cf48",
  measurementId: "G-KT11850E9E"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);