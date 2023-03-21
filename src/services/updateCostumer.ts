import { firebaseDb } from "config/firebase.config";
import { Costumer } from "entities/Costumer";
import { doc, setDoc } from "firebase/firestore";

interface CostumerDoc extends Costumer {
  userid?: string;
  id: string;
}

export async function updateCostumer(costumer: CostumerDoc) {
  const { id, cnpj, corporationName, name } = costumer;

  const costumerRef = doc(firebaseDb, "costumers", id);

  // TODO: test if this costumer alreadyExists

  await setDoc(
    costumerRef,
    {
      cnpj,
      corporationName,
      name,
    } as Omit<CostumerDoc, "id">,
    {
      merge: true,
    }
  );

  return true;
}
