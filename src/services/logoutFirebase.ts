import { firebaseApp } from "config/firebase.config";
import { getAuth, signOut } from "firebase/auth";

export async function logoutFirebase() {
  const auth = getAuth(firebaseApp);
  await signOut(auth);
}
