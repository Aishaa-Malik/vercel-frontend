// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwKf7ZTCsPEugajS6Z4HwjpaKn1BlKXQU",
  authDomain: "flux-48447.firebaseapp.com",
  projectId: "flux-48447",
  storageBucket: "flux-48447.firebasestorage.app",
  messagingSenderId: "499250467748",
  appId: "1:499250467748:web:868ebbc6a0662900d9e731",
  measurementId: "G-6R7QQJE5T7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
