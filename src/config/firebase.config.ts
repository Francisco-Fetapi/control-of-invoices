import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const {
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_APP_ID,
  FIREBASE_APROJECT_ID,
  FIREBASE_MESSANGING_SENDER_ID,
  FIREBASE_STORAGE_BUCKET,
} = process.env;

export const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_APROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSANGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firebaseDb = getFirestore(firebaseApp);

export { firebaseApp, firebaseDb };
