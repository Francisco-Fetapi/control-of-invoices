import { firebaseDb } from "config/firebase.config";
import { ExpenseCategory } from "entities/ExpenseCategory";
import { getDocs, collection, query, where } from "firebase/firestore";

export interface ExpenseCategoryDoc extends ExpenseCategory {
  id: string;
}

export default async function getExpenseCategory(uid: string) {
  const expenseCategoryCollection = collection(
    firebaseDb,
    "expense-categories"
  );
  const q = query(expenseCategoryCollection, where("userid", "==", uid));

  const expenseCategorynapshot = await getDocs(q);

  const expenseCategory: ExpenseCategoryDoc[] = [];
  expenseCategorynapshot.forEach((doc) => {
    expenseCategory.push({
      id: doc.id,
      ...(doc.data() as ExpenseCategory),
    });
  });

  return expenseCategory;
}
