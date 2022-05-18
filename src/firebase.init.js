// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8MDWRnNa3NtnopTdwGdkLq_kruoEKT18",
  authDomain: "to-do-list-494ad.firebaseapp.com",
  projectId: "to-do-list-494ad",
  storageBucket: "to-do-list-494ad.appspot.com",
  messagingSenderId: "248666508047",
  appId: "1:248666508047:web:000b9b4b2367f49a528c7a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
