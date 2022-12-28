// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { browserLocalPersistence, initializeAuth } from 'firebase/auth';
import { initializeFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDJvW2288FOXRAyQzdVK3zzyZjsuLuWQrQ',
  authDomain: 'gallinazoapp.firebaseapp.com',
  projectId: 'gallinazoapp',
  storageBucket: 'gallinazoapp.appspot.com',
  messagingSenderId: '31619849641',
  appId: '1:31619849641:web:65dc11fdf7640f065938b8',
  measurementId: 'G-FZ9C1TM2T7'
};

// Initialize Firebase
const initializeFirebase = () => {
  const app = initializeApp(firebaseConfig);
  initializeAuth(app, {
    persistence: browserLocalPersistence
  });
  initializeFirestore(app, {});
};

export default initializeFirebase;
