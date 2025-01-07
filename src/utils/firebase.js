import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBc5HVe3kByCbSGQ8Wn8Ql15K_Ln3M7lo8",
  authDomain: "project1-834a4.firebaseapp.com",
  projectId: "project1-834a4",
  storageBucket: "project1-834a4.firebasestorage.app",
  messagingSenderId: "346713363637",
  appId: "1:346713363637:web:1c8d11c69bb55cd7519afc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };
