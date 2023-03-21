import { firebaseDb } from "config/firebase.config";
import { ExpenseCategory } from "entities/ExpenseCategory";

import {
  collection,
  query,
  where,
  getCountFromServer,
} from "firebase/firestore";

interface ExpenseCategoryDocument {
  id: string;
}

export default async function expenseCategoryAlreadyExists(
  uid: string,
  expenseCategory: ExpenseCategory
) {
  const expenseCategorysCollection = collection(
    firebaseDb,
    "expense-categories"
  );
  const q = query(
    expenseCategorysCollection,
    where("userid", "==", uid),
    where("name", "==", expenseCategory.name)
  );
  const ExpenseCategorys = await getCountFromServer(q);

  const count = ExpenseCategorys.data().count;

  return count > 0;
}
