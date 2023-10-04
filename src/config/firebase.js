// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
import {
    getAuth
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD7xYQex5ZhmRku0dw3OtTySliZ0t154t8",
    authDomain: "the-dragon-news-38937.firebaseapp.com",
    projectId: "the-dragon-news-38937",
    storageBucket: "the-dragon-news-38937.appspot.com",
    messagingSenderId: "246004310025",
    appId: "1:246004310025:web:8c34d99f3f4d9d6381d8d8",
    measurementId: "G-Y5EEL76DJD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;