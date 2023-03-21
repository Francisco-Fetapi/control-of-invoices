import { firebaseDb } from "config/firebase.config";
import { deleteDoc, doc } from "firebase/firestore";

interface Doc {
  id: string;
}

export async function deleteExpenses(expenses: Doc[]) {
  // delete an array of documents by id.
  const handles = expenses.map(({ id }) => {
    const invoiceRef = doc(firebaseDb, "expenses", id);
    return deleteDoc(invoiceRef);
  });

  await Promise.all(handles);
}
