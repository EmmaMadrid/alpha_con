import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAEURXoi4vOxYapn6KGdic9Je_5k37bUws",
  authDomain: "alpha-con.firebaseapp.com",
  projectId: "alpha-con",
  storageBucket: "alpha-con.appspot.com",
  messagingSenderId: "541724964094",
  appId: "1:541724964094:web:7f899d06cd48dbd57ce1af"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const firestore = getFirestore(app);

export { db }
export const imageDb = getStorage(app);
export const auth = getAuth(app);
export { signOut };
export default firestore;