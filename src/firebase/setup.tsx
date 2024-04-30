import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAk6QQRC1TeEMM5bAE_KqKJ7wkyfsSsHOk",
  authDomain: "hyntra.firebaseapp.com",
  projectId: "hyntra",
  storageBucket: "hyntra.appspot.com",
  messagingSenderId: "865462391834",
  appId: "1:865462391834:web:93b5b4b97028290a366da3"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const database = getFirestore(app)




