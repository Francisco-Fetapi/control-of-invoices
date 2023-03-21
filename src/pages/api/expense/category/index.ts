import { NextApiRequest, NextApiResponse } from "next";
import getExpenseCategory, {
  ExpenseCategoryDoc,
} from "services/getExpenseCategory";

export interface GetExpenseCategoryApiResponse {
  expenseCategorys: ExpenseCategoryDoc[];
}

async function getExpenseCategoryApi(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const uid = req.headers.uid as string;
    const expenseCategorys = await getExpenseCategory(uid);
    res.status(200).send({ expenseCategorys });
  } catch (e: any) {
    res.status(200).send({ msg: e.message });
  }
}

export default getExpenseCategoryApi;
