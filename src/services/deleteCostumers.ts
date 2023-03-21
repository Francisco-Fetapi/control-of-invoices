import { firebaseDb } from "config/firebase.config";
import { deleteDoc, doc } from "firebase/firestore";

interface Doc {
  id: string;
}

export async function deleteCostumers(costumers: Doc[]) {
  // delete an array of documents by id.
  const handles = costumers.map(({ id }) => {
    const invoiceRef = doc(firebaseDb, "costumers", id);
    return deleteDoc(invoiceRef);
  });

  await Promise.all(handles);
}
