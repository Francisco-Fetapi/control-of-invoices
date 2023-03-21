import { NextApiRequest, NextApiResponse } from "next";
import { deleteExpenses } from "services/deleteExpenses";

interface Request {
  documents: { id: string }[];
}

export interface DeleteExpenseApiResponse {
  msg: string;
  deleted: boolean;
}

async function DeleteExpense(req: NextApiRequest, res: NextApiResponse) {
  const { body } = req;
  const { documents } = <Request>body;

  try {
    const deleted = await deleteExpenses(documents);

    res.status(200).send({ deleted, msg: "Documents deleted." });
  } catch (e: any) {
    res.status(200).send({ msg: e.message });
    console.log(e.message);
  }
}

export default DeleteExpense;
