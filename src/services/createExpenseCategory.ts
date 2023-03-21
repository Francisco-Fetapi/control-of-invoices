import { firebaseDb } from "config/firebase.config";
import { ExpenseCategory } from "entities/ExpenseCategory";
import { addDoc, collection } from "firebase/firestore";

interface ExpenseCategoryDoc extends ExpenseCategory {
  userid?: string;
}

export async function createExpenseCategory(
  userid: string,
  expenseCategory: ExpenseCategory
) {
  const { description, name } = expenseCategory;

  const docRef = await addDoc(collection(firebaseDb, "expense-categories"), {
    description,
    name,
    userid,
  } as ExpenseCategoryDoc);
}
