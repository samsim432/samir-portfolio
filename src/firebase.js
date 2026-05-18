import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD-EAisD57Gz-jWMgLBGxnJEvT_3F2_00Y",
  authDomain: "what-if-website.firebaseapp.com",
  projectId: "what-if-website",
  storageBucket: "what-if-website.firebasestorage.app",
  messagingSenderId: "1081399310901",
  appId: "1:1081399310901:web:d32ce939ae8a47954b4f7c",
  measurementId: "G-DQJ7LY7RZT",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export const storage = getStorage(app);