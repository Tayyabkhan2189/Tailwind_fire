import { initializeApp } from "firebase/app";
import {getAuth , createUserWithEmailAndPassword , signOut} from 'firebase/auth'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2vFgsAacXLt6U2_ACTZhgtE4yZxnd7Qc",
  authDomain: "tailwind-ecom.firebaseapp.com",
  projectId: "tailwind-ecom",
  storageBucket: "tailwind-ecom.appspot.com",
  messagingSenderId: "572138435041",
  appId: "1:572138435041:web:0909f1e9bd66c3e374e2a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Auth = getAuth(app);
export {app , Auth , createUserWithEmailAndPassword , signOut};