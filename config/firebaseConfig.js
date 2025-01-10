// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhpS7pwYxBPeLnRt8rfPScgTheTa5Kl_M",
  authDomain: "dine-time-1f4ab.firebaseapp.com",
  projectId: "dine-time-1f4ab",
  storageBucket: "dine-time-1f4ab.firebasestorage.app",
  messagingSenderId: "739724865694",
  appId: "1:739724865694:web:4fe5ace8793edc8ca80b8f",
  measurementId: "G-P7P5DTRYEN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);