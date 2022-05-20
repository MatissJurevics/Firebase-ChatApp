import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";




const firebaseApp = initializeApp({
    apiKey: "AIzaSyBms3EX1YapwrLXNkNPCi1N8-cJUzV0zLo",
    authDomain: "firechat-be4f4.firebaseapp.com",
    projectId: "firechat-be4f4",
    storageBucket: "firechat-be4f4.appspot.com",
    messagingSenderId: "108487292910",
    appId: "1:108487292910:web:ae8db53e90c244218300ff"
})

const db = getFirestore(firebaseApp)
const auth = getAuth();


export { db, auth }