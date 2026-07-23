// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCXUwAaSh6CN0QfyJzqyvfpJO_nXSqPlc",
  authDomain: "imt-earn.firebaseapp.com",
  projectId: "imt-earn",
  storageBucket: "imt-earn.firebasestorage.app",
  messagingSenderId: "295250368100",
  appId: "1:295250368100:web:48b5af64f52749eb19f171",
  measurementId: "G-7XFSGFHCFP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
