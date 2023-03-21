import { firebaseDb } from "config/firebase.config";
import { Costumer } from "entities/Costumer";
import { getDocs, collection, query, where } from "firebase/firestore";

export interface CostumerDoc extends Costumer {
  id: string;
}

export default async function getCostumers(uid: string) {
  const costumersCollection = collection(firebaseDb, "costumers");
  const q = query(costumersCollection, where("userid", "==", uid));

  const costumerSnapshot = await getDocs(q);

  const costumers: CostumerDoc[] = [];
  costumerSnapshot.forEach((doc) => {
    costumers.push({
      id: doc.id,
      ...(doc.data() as Costumer),
    });
  });

  return costumers;
}
