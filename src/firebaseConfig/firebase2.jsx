// src/firebase/firebase2.js
import { getFirestore } from 'firebase/firestore';
import { initializeApp, getApps, getApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyD7ZT4O7fSUd-tsRNzFhwHesTRqlTtLcvE",
    authDomain: "examen-api-2ede4.firebaseapp.com",
    databaseURL: "https://examen-api-2ede4-default-rtdb.firebaseio.com",
    projectId: "examen-api-2ede4",
    storageBucket: "examen-api-2ede4.appspot.com",
    messagingSenderId: "482087744118",
    appId: "1:482087744118:web:e9ccf8dd545d25f384a557"
  };

// Initialize Firebase app only if it hasn't been initialized already
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db2 = getFirestore(app);

export { db2 };
