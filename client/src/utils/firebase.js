
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-e1be1.firebaseapp.com",
  projectId: "interviewiq-e1be1",
  storageBucket: "interviewiq-e1be1.firebasestorage.app",
  messagingSenderId: "678140884732",
  appId: "1:678140884732:web:90ce3e66ca6cc6f6ed0979"
};


const app = initializeApp(firebaseConfig);


const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth, provider} 