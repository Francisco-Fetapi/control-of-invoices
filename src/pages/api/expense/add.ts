import { Expense } from "entities/Expense";
import { NextApiRequest, NextApiResponse } from "next";
import { createExpense } from "services/createExpense";

interface Request {
  expense: Expense;
}

export interface AddExpenseApiResponse {
  msg: string;
  created: boolean;
}

async function addExpense(req: NextApiRequest, res: NextApiResponse) {
  const { body, headers } = req;
  const { expense } = <Request>body;
  const uid = headers.uid as string;

  try {
    await createExpense(uid, expense);

    res.status(200).send({ created: true, msg: "Expense created." });
  } catch (e: any) {
    res.status(200).send({ msg: e.message });
  }
}

export default addExpense;
