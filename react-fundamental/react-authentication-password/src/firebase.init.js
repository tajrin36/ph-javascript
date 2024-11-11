// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDMcg_RfAZc6lXHODmOKyfFbu_gi_5Q5Fs',
  authDomain: 'email-password-auth-9d2d9.firebaseapp.com',
  projectId: 'email-password-auth-9d2d9',
  storageBucket: 'email-password-auth-9d2d9.firebasestorage.app',
  messagingSenderId: '39272660367',
  appId: '1:39272660367:web:43c06fab25aaa60b2d1ffa',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
