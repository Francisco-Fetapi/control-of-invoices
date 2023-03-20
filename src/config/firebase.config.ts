import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration

// export const {
//   FIREBASE_API_KEY,
//   FIREBASE_AUTH_DOMAIN,
//   FIREBASE_APP_ID,
//   FIREBASE_APROJECT_ID,
//   FIREBASE_MESSANGING_SENDER_ID,
//   FIREBASE_STORAGE_BUCKET,
// } = process.env;

// not secure. only for test.
export const firebaseConfig = {
  apiKey: "AIzaSyDaOwS1ze5hLC1T-hMXwdfTR_kR--t88So",
  authDomain: "control-of-invoices.firebaseapp.com",
  projectId: "control-of-invoices",
  storageBucket: "control-of-invoices.appspot.com",
  messagingSenderId: "554142545924",
  appId: "1:554142545924:web:8f9d2accd3e27b8d4bdd51",
};

// for real app use this instead

// export const firebaseConfig = {
//   apiKey: FIREBASE_API_KEY,
//   authDomain: FIREBASE_AUTH_DOMAIN,
//   projectId: FIREBASE_APROJECT_ID,
//   storageBucket: FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: FIREBASE_MESSANGING_SENDER_ID,
//   appId: FIREBASE_APP_ID,
// };

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firebaseDb = getFirestore(firebaseApp);

export { firebaseApp, firebaseDb };
