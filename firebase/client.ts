import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqZ3CeR2P3pnQ0DPuM6dCUEwSrQJznGrM",
  authDomain: "virtual-interview-era.firebaseapp.com",
  projectId: "virtual-interview-era",
  storageBucket: "virtual-interview-era.firebasestorage.app",
  messagingSenderId: "519474043368",
  appId: "1:519474043368:web:9b6a22988c2ef002f0ac5d",
  measurementId: "G-HS82Z58LP4",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
