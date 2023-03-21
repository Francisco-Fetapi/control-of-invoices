import { firebaseDb } from "config/firebase.config";
import { Expense } from "entities/Expense";
import { getDocs, collection, query, where } from "firebase/firestore";

export interface ExpenseDoc extends Expense {
  id: string;
}

export default async function getExpenses(uid: string) {
  const expensesCollection = collection(firebaseDb, "expenses");
  const q = query(expensesCollection, where("userid", "==", uid));

  const expenseSnapshot = await getDocs(q);

  const expenses: ExpenseDoc[] = [];
  expenseSnapshot.forEach((doc) => {
    expenses.push({
      id: doc.id,
      ...(doc.data() as Expense),
    });
  });

  return expenses;
}
