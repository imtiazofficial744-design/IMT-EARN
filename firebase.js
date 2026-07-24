// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

// Firebase Config
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

// Initialize Authentication
const auth = getAuth(app);

// Export
export { auth };
