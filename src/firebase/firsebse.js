// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore}  from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLib1wnUHNftBLaCX-Hn35z5XF221m8t8",
  authDomain: "vite-conntact.firebaseapp.com",
  projectId: "vite-conntact",
  storageBucket: "vite-conntact.firebasestorage.app",
  messagingSenderId: "869097784202",
  appId: "1:869097784202:web:0a0ae1ed23d1844eeffe73"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)