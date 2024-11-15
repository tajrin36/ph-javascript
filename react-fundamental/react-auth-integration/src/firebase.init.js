// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBD9TyfsGDkucwjUJk4vJQ4QAi7Zj6tbeY',
  authDomain: 'auth-integration-67b7e.firebaseapp.com',
  projectId: 'auth-integration-67b7e',
  storageBucket: 'auth-integration-67b7e.firebasestorage.app',
  messagingSenderId: '251143312504',
  appId: '1:251143312504:web:4b345ca3eebcd9beae098d',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
