import { ExpenseCategory } from "entities/ExpenseCategory";
import { NextApiRequest, NextApiResponse } from "next";
import { createExpenseCategory } from "services/createExpenseCategory";

interface Request {
  expenseCategory: ExpenseCategory;
}

export interface AddExpenseCategoryApiResponse {
  msg: string;
  created: boolean;
}

async function addExpenseCategory(req: NextApiRequest, res: NextApiResponse) {
  const { body, headers } = req;
  const { expenseCategory } = <Request>body;
  const uid = headers.uid as string;

  try {
    const created = await createExpenseCategory(uid, expenseCategory);

    res.status(200).send({ created, msg: "ExpenseCategory created." });
  } catch (e: any) {
    res.status(200).send({ msg: e.message });
  }
}

export default addExpenseCategory;
