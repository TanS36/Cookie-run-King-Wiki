import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB70FKPYJfJ0mUU3JYuMR_oI0WeSp22vbg",
  authDomain: "kingdom-5919a.firebaseapp.com",
  projectId: "kingdom-5919a",
  storageBucket: "kingdom-5919a.appspot.com",
  messagingSenderId: "480500593784",
  appId: "1:480500593784:web:36c234e84f8c8078ce298d"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);

export {firestore, auth};

