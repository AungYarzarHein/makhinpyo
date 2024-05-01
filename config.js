

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FB_KEY,
  authDomain: "a-pyo-lay.firebaseapp.com",
  projectId: "a-pyo-lay",
  storageBucket: "a-pyo-lay.appspot.com",
  messagingSenderId: "131193045046",
  appId: "1:131193045046:web:1e3561f5198cd61ffb9897",
  measurementId: "G-Y92GCKKZM9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);

