import { firebaseDb } from "config/firebase.config";
import { Invoice } from "entities/Invoice";
import { addDoc, collection } from "firebase/firestore";

interface InvoiceDoc extends Invoice {
  userid?: string;
}

export async function createInvoice(userid: string, Invoice: Invoice) {
  const {
    accrualMonth,
    corporationName,
    description,
    number,
    value,
    receiptDate,
  } = Invoice;

  const docRef = await addDoc(collection(firebaseDb, "invoices"), {
    accrualMonth,
    corporationName,
    description,
    number,
    receiptDate,
    value,
    userid,
  } as InvoiceDoc);
}
