import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Config provided by user
const firebaseConfig = {
  apiKey: "AIzaSyDej5ZVhnE-moyoFi7rVoUA2LF8x9J7aH8",
  authDomain: "bcd360.firebaseapp.com",
  projectId: "bcd360",
  storageBucket: "bcd360.firebasestorage.app",
  messagingSenderId: "15964196898",
  appId: "1:15964196898:web:84f9dd3879b6b86937fa7b",
  measurementId: "G-V7GD88LDYY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, analytics, db, auth };