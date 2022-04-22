// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBnjjhfdBhmU00RX9ibSeE30d-PZVd258U",
    authDomain: "e-tutor-dbd3e.firebaseapp.com",
    projectId: "e-tutor-dbd3e",
    storageBucket: "e-tutor-dbd3e.appspot.com",
    messagingSenderId: "208183243390",
    appId: "1:208183243390:web:121abc968bf9281bf0de2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;