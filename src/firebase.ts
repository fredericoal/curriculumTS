// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "curriculumdb-1589d.firebaseapp.com",
    projectId: "curriculumdb-1589d",
    storageBucket: "curriculumdb-1589d.firebasestorage.app",
    messagingSenderId: "629960583168",
    appId: "1:629960583168:web:55bb06840d92a3414e10e5",
    measurementId: "G-6T8P6Y3VC4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)

export { db, collection, getDocs, addDoc, getFirestore }