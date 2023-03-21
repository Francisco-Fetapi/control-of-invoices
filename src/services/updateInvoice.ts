import { firebaseDb } from "config/firebase.config";
import { Invoice } from "entities/Invoice";
import { doc, setDoc } from "firebase/firestore";

interface InvoiceDoc extends Invoice {
  userid?: string;
  id: string;
}

export async function updateInvoice(invoice: InvoiceDoc) {
  const {
    id,
    accrualMonth,
    corporationName,
    description,
    number,
    receiptDate,
    value,
  } = invoice;

  const invoiceRef = doc(firebaseDb, "invoices", id);

  await setDoc(
    invoiceRef,
    {
      accrualMonth,
      corporationName,
      description,
      number,
      receiptDate,
      value,
    } as Omit<InvoiceDoc, "id">,
    {
      merge: true,
    }
  );

  return true;
}
