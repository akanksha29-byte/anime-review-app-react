import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfiuuASY-KEsmxsfD0_MHrjnviyKOLFdA",
  authDomain: "test-68ae1.firebaseapp.com",
  projectId: "test-68ae1",
  storageBucket: "test-68ae1.appspot.com",
  messagingSenderId: "525376138882",
  appId: "1:525376138882:web:7e94939b207bfa85dd8e9b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
