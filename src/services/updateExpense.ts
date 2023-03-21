import { firebaseDb } from "config/firebase.config";
import { Expense } from "entities/Expense";
import { doc, setDoc } from "firebase/firestore";

interface ExpenseDoc extends Expense {
  userid?: string;
  id: string;
}

export async function updateExpense(expense: ExpenseDoc) {
  const { id, accrualMonth, category, corporationName, name, payday, value } =
    expense;

  const expenseRef = doc(firebaseDb, "expenses", id);

  await setDoc(
    expenseRef,
    {
      accrualMonth,
      category,
      corporationName,
      name,
      payday,
      value,
    } as Omit<ExpenseDoc, "id">,
    {
      merge: true,
    }
  );

  return true;
}
