import { firebaseDb } from "config/firebase.config";
import { User } from "entities/User";
import { getDocs, collection, query, where } from "firebase/firestore";

interface UserDocument extends User {
  id: string;
}

export default async function getAllUserData(uid: string) {
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

  return users[0];
}
