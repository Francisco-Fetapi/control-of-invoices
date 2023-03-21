import { firebaseDb } from "config/firebase.config";
import { Invoice } from "entities/Invoice";
import { getDocs, collection, query, where } from "firebase/firestore";

export interface InvoiceDoc extends Invoice {
  id: string;
}

export default async function getInvoices(uid: string) {
  const invoicesCollection = collection(firebaseDb, "invoices");
  const q = query(invoicesCollection, where("userid", "==", uid));

  const InvoiceSnapshot = await getDocs(q);

  const Invoices: InvoiceDoc[] = [];
  InvoiceSnapshot.forEach((doc) => {
    Invoices.push({
      id: doc.id,
      ...(doc.data() as Invoice),
    });
  });

  return Invoices;
}
