// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDvHldD3FFIktJM78ND_SgwKwqiH2aZfs4',
  authDomain: 'assemblerchallenge.firebaseapp.com',
  projectId: 'assemblerchallenge',
  storageBucket: 'assemblerchallenge.appspot.com',
  messagingSenderId: '927019781160',
  appId: '1:927019781160:web:48eb2c400ad0fa85ae791d',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
