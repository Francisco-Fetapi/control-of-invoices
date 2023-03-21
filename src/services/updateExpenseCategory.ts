import { firebaseDb } from "config/firebase.config";
import { ExpenseCategory } from "entities/ExpenseCategory";
import { doc, setDoc } from "firebase/firestore";

interface ExpenseCategoryDoc extends ExpenseCategory {
  userid?: string;
  id: string;
}

export async function updateExpenseCategory(
  expenseCategory: ExpenseCategoryDoc
) {
  const { description, name, id, archived = false } = expenseCategory;

  const expenseCategoryRef = doc(firebaseDb, "expense-categories", id);

  // TODO: verify if this expenseCategory already exists before update.

  await setDoc(
    expenseCategoryRef,
    {
      description,
      name,
      archived,
    } as Omit<ExpenseCategoryDoc, "id">,
    {
      merge: true,
    }
  );

  return true;
}
