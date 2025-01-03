import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnfc5EjASuSx7yV6avMYrDStTZE7iCc8I",
  authDomain: "my-portofolio-19b1e.firebaseapp.com",
  projectId: "my-portofolio-19b1e",
  storageBucket: "my-portofolio-19b1e.firebasestorage.app",
  messagingSenderId: "853821691591",
  appId: "1:853821691591:web:2f50ddaaa82a26eb7490e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };