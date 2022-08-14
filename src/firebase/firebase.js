import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBTOin8ptBW1uw4EoObULJfq080DuPVoTU",
  authDomain: "coderburger2022.firebaseapp.com",
  projectId: "coderburger2022",
  storageBucket: "coderburger2022.appspot.com",
  messagingSenderId: "50370129834",
  appId: "1:50370129834:web:b5db6db61aa10255c145d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);