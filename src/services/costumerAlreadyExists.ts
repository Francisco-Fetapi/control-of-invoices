import { firebaseDb } from "config/firebase.config";
import { Costumer } from "entities/Costumer";
import { Settings } from "entities/Settings";
import { User } from "entities/User";
import {
  updateDoc,
  doc,
  getDocs,
  collection,
  query,
  where,
  getCountFromServer,
} from "firebase/firestore";

interface CostumerDocument {
  id: string;
}

export default async function costumerAlreadyExists(
  uid: string,
  costumer: Costumer
) {
  const costumersCollection = collection(firebaseDb, "costumers");
  const q = query(
    costumersCollection,
    where("userid", "==", uid),
    where("corporationName", "==", costumer.corporationName)
  );
  const costumers = await getCountFromServer(q);

  const count = costumers.data().count;

  return count > 0;
}
