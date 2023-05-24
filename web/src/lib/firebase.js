
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Initialize Firebase
const app = initializeApp({
  apiKey: "AIzaSyAtIIeSoWGqTg0ESknZIe5PXQG0I4Zy1N0",
  authDomain: "verein-a145f.firebaseapp.com",
  projectId: "verein-a145f",
  storageBucket: "verein-a145f.appspot.com",
  messagingSenderId: "292249764202",
  appId: "1:292249764202:web:96576e62d569974e202513",
  measurementId: "G-GKNKTBXS31"
});

export const db = getFirestore(app);
export const auth = getAuth(app);