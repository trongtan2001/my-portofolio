import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAnfc5EjASuSx7yV6avMYrDStTZE7iCc8I",
    authDomain: "my-portofolio-19b1e.firebaseapp.com",
    projectId: "my-portofolio-19b1e",
    storageBucket: "my-portofolio-19b1e.firebasestorage.app",
    messagingSenderId: "853821691591",
    appId: "1:853821691591:web:2f50ddaaa82a26eb7490e2"
};

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };