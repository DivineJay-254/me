// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "YOUR_API_KEY_HERE",
  authDomain: "whatsappj-83cc1.firebaseapp.com",
  databaseURL: "https://whatsappj-83cc1-default-rtdb.firebaseio.com",
  projectId: "whatsappj-83cc1",
  storageBucket: "whatsappj-83cc1.firebasestorage.app",
  messagingSenderId: "598004121437",
  appId: "1:598004121437:web:a63e982ac5d4f6da9f32b4",
  measurementId: "G-Z35MKSSQEB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Only initialize analytics if API key is set
let analytics = null;
if (process.env.NEXT_PUBLIC_FIREBASE_API_KEY) {
  analytics = getAnalytics(app);
}

export { app, analytics };
