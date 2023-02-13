// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpFzbgsrUFyt3ycHbuYNDGjLb1A_mSAu0",
  authDomain: "stockbase-3afdf.firebaseapp.com",
  projectId: "stockbase-3afdf",
  storageBucket: "stockbase-3afdf.appspot.com",
  messagingSenderId: "651165342575",
  appId: "1:651165342575:web:4c4c62e1eff6bef2db269a",
  measurementId: "G-TGHLT83TM3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export default app;