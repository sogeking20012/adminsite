// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZ2Jx_QySdMoc7rqs8T3Kh1ueGpN4M6mc",
  authDomain: "scan-saver.firebaseapp.com",
  databaseURL: "https://scan-saver-default-rtdb.firebaseio.com",
  projectId: "scan-saver",
  storageBucket: "scan-saver.appspot.com",
  messagingSenderId: "468360572804",
  appId: "1:468360572804:web:9ee4dcdfd52e065ea477d1",
  measurementId: "G-ZV1J2WQ9J7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);