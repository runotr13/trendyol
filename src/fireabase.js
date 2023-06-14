// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwklqkbaqDTk6vBE-uYJWSgU5v2bVeI3s",
  authDomain: "trendyol-ad719.firebaseapp.com",
  projectId: "trendyol-ad719",
  storageBucket: "trendyol-ad719.appspot.com",
  messagingSenderId: "380479558183",
  appId: "1:380479558183:web:04903bd0507d5fa6aa7402",
  measurementId: "G-XZEK8VT3NL"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db