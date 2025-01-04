// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage, getstore} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAjLtnEoUiPTcl52mpHIZg0eLsahApDyU",
  authDomain: "sellsmap-168ad.firebaseapp.com",
  projectId: "sellsmap-168ad",
  storageBucket: "sellsmap-168ad.firebasestorage.app",
  messagingSenderId: "916198212078",
  appId: "1:916198212078:web:67454d87bfccc334bd8eff",
  measurementId: "G-N85YBM8S07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
const analytics = getAnalytics(app);

export default app;