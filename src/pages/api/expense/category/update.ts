import { ExpenseCategory } from "entities/ExpenseCategory";
import { NextApiRequest, NextApiResponse } from "next";
import { updateExpenseCategory } from "services/updateExpenseCategory";

interface Request {
  expenseCategory: ExpenseCategory & { id: string };
}

export interface EditExpenseCategoryApiResponse {
  msg: string;
  updated: boolean;
}

async function EditExpenseCategory(req: NextApiRequest, res: NextApiResponse) {
  const { body } = req;
  const { expenseCategory } = <Request>body;

  try {
    const updated = await updateExpenseCategory(expenseCategory);

    res.status(200).send({ updated, msg: "ExpenseCategory updated." });
  } catch (e: any) {
    res.status(200).send({ msg: e.message });
    console.log(e.message);
  }
}

export default EditExpenseCategory;
