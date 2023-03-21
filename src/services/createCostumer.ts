import { firebaseDb } from "config/firebase.config";
import { Costumer } from "entities/Costumer";
import { addDoc, collection } from "firebase/firestore";
import costumerAlreadyExists from "./costumerAlreadyExists";

interface CostumerDoc extends Costumer {
  userid?: string;
}

export async function createCostumer(userid: string, costumer: CostumerDoc) {
  const { cnpj, corporationName, name } = costumer;

  const alreadyExists = await costumerAlreadyExists(userid, costumer);

  if (alreadyExists) {
    return false;
  }

  const docRef = await addDoc(collection(firebaseDb, "costumers"), {
    cnpj,
    corporationName,
    name,
    userid,
  } as CostumerDoc);

  return true;
}
