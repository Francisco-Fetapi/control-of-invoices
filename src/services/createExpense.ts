import { firebaseDb } from "config/firebase.config";
import { Expense } from "entities/Expense";
import { addDoc, collection } from "firebase/firestore";

interface ExpenseDoc extends Expense {
  userid?: string;
}

export async function createExpense(userid: string, expense: Expense) {
  const { accrualMonth, category, corporationName, name, payday, value } =
    expense;

  const docRef = await addDoc(collection(firebaseDb, "expenses"), {
    accrualMonth,
    category,
    corporationName,
    name,
    payday,
    value,
    userid,
  } as ExpenseDoc);
}
