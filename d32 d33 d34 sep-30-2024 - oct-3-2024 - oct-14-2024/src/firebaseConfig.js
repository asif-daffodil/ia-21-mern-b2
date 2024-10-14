// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4gA9bUkqDsLQeyJUgSZtwmv7_c0Im_nI",
  authDomain: "ia21mernb2.firebaseapp.com",
  projectId: "ia21mernb2",
  storageBucket: "ia21mernb2.appspot.com",
  messagingSenderId: "528029558546",
  appId: "1:528029558546:web:862bc038bd29175c7ab5cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);