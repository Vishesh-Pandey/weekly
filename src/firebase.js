import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD3UvdvB9eA9_UIn70TsDJOjtHwzGrOoFg",
  authDomain: "fir-tutorial-3c415.firebaseapp.com",
  projectId: "fir-tutorial-3c415",
  storageBucket: "fir-tutorial-3c415.appspot.com",
  messagingSenderId: "28110997447",
  appId: "1:28110997447:web:df806bb51831bf5eb83be2",
  measurementId: "G-RZCZQ1JYRF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
export default app;
