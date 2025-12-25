import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDiBWsBCeYsbnq2OnL9gAWzMYnmly0-oyE",
  authDomain: "am-clone-48739.firebaseapp.com",
  projectId: "am-clone-48739",
  storageBucket: "am-clone-48739.firebasestorage.app",
  messagingSenderId: "687716628314",
  appId: "1:687716628314:web:819046fe29fa79652f2563",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services
export const auth = getAuth(app);
export const db = getFirestore(app);
