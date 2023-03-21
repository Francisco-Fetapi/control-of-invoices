import { firebaseDb } from "config/firebase.config";
import { Settings } from "entities/Settings";
import { User } from "entities/User";
import {
  updateDoc,
  doc,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";

interface UserDocument extends User {
  id: string;
}

export default async function updateUserSettings(
  uid: string,
  settings: Settings
) {
  const usersCollection = collection(firebaseDb, "users");
  const q = query(usersCollection, where("userid", "==", uid));

  const userSnapshot = await getDocs(q);

  const users: UserDocument[] = [];
  userSnapshot.forEach((doc) => {
    users.push({
      id: doc.id,
      ...(doc.data() as User),
    });
  });

  const user = users[0];

  const docRef = doc(firebaseDb, "users", user.id);
  await updateDoc(docRef, {
    settings,
  });

  return true;
}
