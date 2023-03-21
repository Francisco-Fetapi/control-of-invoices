import { firebaseDb } from "config/firebase.config";
import { ExpenseCategory } from "entities/ExpenseCategory";
import { doc, setDoc, updateDoc } from "firebase/firestore";

interface ExpenseCategoryDoc extends ExpenseCategory {
  userid?: string;
  id: string;
}

export async function updateExpenseCategory(
  userid: string,
  expenseCategory: ExpenseCategoryDoc
) {
  const { description, name, id, archived = false } = expenseCategory;

  const expenseCategoryRef = doc(firebaseDb, "expense-categories", id);

  // TODO: verify if this expenseCategory already exists before update.

  console.log("expenseCategory", expenseCategory);

  await setDoc(
    expenseCategoryRef,
    {
      description,
      name,
      userid,
      archived,
    } as Omit<ExpenseCategoryDoc, "id">,
    {
      merge: true,
    }
  );

  return true;
}
