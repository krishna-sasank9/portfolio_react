
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyCNYNCLsOb_ZHqF1TE3yGDoFMHgxqS4Td4",
  authDomain: "krishna-portfolio-reactjs.firebaseapp.com",
  projectId: "krishna-portfolio-reactjs",
  storageBucket: "krishna-portfolio-reactjs.appspot.com",
  messagingSenderId: "708207234612",
  appId: "1:708207234612:web:8d02a2885fd2563dbd0461"
};

export const app = initializeApp(firebaseConfig);
export const db=getFirestore()