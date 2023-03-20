import { firebaseApp } from "config/firebase.config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

interface Params {
  email: string;
  password: string;
}

export async function createUserWithEmailPassword({ email, password }: Params) {
  const auth = getAuth(firebaseApp);

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
  }
  return null;
}
