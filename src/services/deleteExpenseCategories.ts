import { firebaseDb } from "config/firebase.config";
import { deleteDoc, doc } from "firebase/firestore";

interface Doc {
  id: string;
}

export async function deleteExpenseCategories(expenseCategories: Doc[]) {
  // delete an array of documents by id.
  const handles = expenseCategories.map(({ id }) => {
    const invoiceRef = doc(firebaseDb, "expense-categories", id);
    return deleteDoc(invoiceRef);
  });

  await Promise.all(handles);
}
