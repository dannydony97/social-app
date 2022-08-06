import { FirebaseOptions, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyBCDdaLMwc54yO3SQPrmv8jSRvGylco0wo",
  authDomain: "social-app-3b525.firebaseapp.com",
  projectId: "social-app-3b525",
  storageBucket: "social-app-3b525.appspot.com",
  messagingSenderId: "450380151210",
  appId: "1:450380151210:web:1cb4358b10b9108891d3d3",
  measurementId: "G-NH3W4Z1EEK"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };