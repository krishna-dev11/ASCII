// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "aiwebsitebuilder-62964.firebaseapp.com",
  projectId: "aiwebsitebuilder-62964",
  storageBucket: "aiwebsitebuilder-62964.firebasestorage.app",
  messagingSenderId: "868024592346",
  appId: "1:868024592346:web:244db153a600d71d02c2e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
const provider=new GoogleAuthProvider()

export {auth,provider}
