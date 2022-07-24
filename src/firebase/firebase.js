import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCTo5mwOFWMC2lGdrB8cSTkKiuT6vizoNo",
  authDomain: "coderburger.firebaseapp.com",
  projectId: "coderburger",
  storageBucket: "coderburger.appspot.com",
  messagingSenderId: "71952086286",
  appId: "1:71952086286:web:b12ff64dea09a51499935f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);