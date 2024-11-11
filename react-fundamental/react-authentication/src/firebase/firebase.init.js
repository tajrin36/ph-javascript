// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAM_QWJHJVvuKrbTovKt2MAaI3VDGcC4k0',
  authDomain: 'simple-firebase-562d2.firebaseapp.com',
  projectId: 'simple-firebase-562d2',
  storageBucket: 'simple-firebase-562d2.firebasestorage.app',
  messagingSenderId: '445681389232',
  appId: '1:445681389232:web:c7310da0ab421c521a7575',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;