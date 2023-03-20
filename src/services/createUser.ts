import { firebaseDb } from "config/firebase.config";
import { User } from "entities/User";
import { updateProfile } from "firebase/auth";
import { addDoc, collection, DocumentData } from "firebase/firestore";
import { createUserWithEmailPassword } from "./createUserWithEmailAndPassword";

interface UserDoc extends Partial<User>, DocumentData {
  userid: string;
}

export async function createUser(user: User) {
  const userRef = await createUserWithEmailPassword(user);

  if (userRef) {
    await updateProfile(userRef, {
      displayName: user.name,
    });
  }
  const { cnpj, corporationName, phoneNumber } = user;
  const docRef = await addDoc(collection(firebaseDb, "users"), {
    cnpj,
    corporationName,
    phoneNumber,
    userid: userRef?.uid,
  } as UserDoc);

  return { docId: docRef.id, userRef };
}
