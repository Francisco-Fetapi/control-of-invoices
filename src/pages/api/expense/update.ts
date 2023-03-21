import { Expense } from "entities/Expense";
import { NextApiRequest, NextApiResponse } from "next";
import { updateExpense } from "services/updateExpense";

interface Request {
  expense: Expense & { id: string };
}

export interface EditExpenseApiResponse {
  msg: string;
  updated: boolean;
}

async function EditExpense(req: NextApiRequest, res: NextApiResponse) {
  const { body } = req;
  const { expense } = <Request>body;

  try {
    const updated = await updateExpense(expense);

    res.status(200).send({ updated, msg: "Expense updated." });
  } catch (e: any) {
    res.status(200).send({ msg: e.message });
    console.log(e.message);
  }
}

export default EditExpense;
