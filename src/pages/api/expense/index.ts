import { NextApiRequest, NextApiResponse } from "next";
import getExpenses, { ExpenseDoc } from "services/getExpenses";

export interface GetExpensesApiResponse {
  expenses: ExpenseDoc[];
}

async function getExpensesApi(req: NextApiRequest, res: NextApiResponse) {
  try {
    const uid = req.headers.uid as string;
    const expenses = await getExpenses(uid);
    res.status(200).send({ expenses });
  } catch (e: any) {
    res.status(200).send({ msg: e.message });
  }
}

export default getExpensesApi;
