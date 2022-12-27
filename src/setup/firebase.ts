// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
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
  const firebaseApp = initializeApp(firebaseConfig);
  const auth = getAuth(firebaseApp);
  const firestore = getFirestore(firebaseApp);

  return { firebaseApp, auth, firestore };
};

export default initializeFirebase;
