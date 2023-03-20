import { firebaseApp } from "config/firebase.config";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

interface Params {
  email: string;
  password: string;
}

export async function loginUserWithEmailPassword({ email, password }: Params) {
  const auth = getAuth(firebaseApp);

  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  return userCredential;
}
