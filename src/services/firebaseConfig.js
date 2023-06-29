import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyA6bJFRCaKOCLAMD72I3-kr4Zm63wDjo4s",
  authDomain: "pode-5c7d7.firebaseapp.com",
  databaseURL: "https://pode-5c7d7-default-rtdb.firebaseio.com",
  projectId: "pode-5c7d7",
  storageBucket: "pode-5c7d7.appspot.com",
  messagingSenderId: "190943305635",
  appId: "1:190943305635:web:eba9b43ebceeff09448416",
  measurementId: "G-LRQ4J12X6S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);