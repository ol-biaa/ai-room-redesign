// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-room-redesign-2b473.firebaseapp.com",
  projectId: "ai-room-redesign-2b473",
  storageBucket: "ai-room-redesign-2b473.firebasestorage.app",
  messagingSenderId: "604138300214",
  appId: "1:604138300214:web:f386c1b0ea234648618997",
  measurementId: "G-7SPREPQGDD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app);
