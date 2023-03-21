import { firebaseDb } from "config/firebase.config";
import { deleteDoc, doc } from "firebase/firestore";

interface Doc {
  id: string;
}

export async function deleteInvoices(invoices: Doc[]) {
  // delete an array of documents by id.
  const handles = invoices.map(({ id }) => {
    const invoiceRef = doc(firebaseDb, "invoices", id);
    return deleteDoc(invoiceRef);
  });

  await Promise.all(handles);
}
