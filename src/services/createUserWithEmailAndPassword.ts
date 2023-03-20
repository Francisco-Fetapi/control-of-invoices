import { firebaseApp } from "config/firebase.config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

interface Params {
  email: string;
  password: string;
}

export async function createUserWithEmailPassword({ email, password }: Params) {
  const auth = getAuth(firebaseApp);

  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  return userCredential.user;
}
