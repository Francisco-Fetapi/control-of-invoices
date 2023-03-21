import { NextApiRequest, NextApiResponse } from "next";
import { deleteExpenseCategories } from "services/deleteExpenseCategories";

interface Request {
  documents: { id: string }[];
}

export interface DeleteExpenseCategoriesApiResponse {
  msg: string;
  deleted: boolean;
}

async function DeleteExpenseCategories(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { body } = req;
  const { documents } = <Request>body;

  try {
    const deleted = await deleteExpenseCategories(documents);

    res.status(200).send({ deleted, msg: "Documents deleted." });
  } catch (e: any) {
    res.status(200).send({ msg: e.message });
    console.log(e.message);
  }
}

export default DeleteExpenseCategories;
