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
  const { body, headers } = req;
  const { expenseCategory } = <Request>body;
  const uid = headers.uid as string;

  try {
    const updated = await updateExpenseCategory(uid, expenseCategory);

    res.status(200).send({ updated, msg: "ExpenseCategory ipdated." });
  } catch (e: any) {
    res.status(200).send({ msg: e.message });
    console.log(e.message);
  }
}

export default EditExpenseCategory;
