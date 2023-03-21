import { NextApiRequest, NextApiResponse } from "next";
import { deleteCostumers } from "services/deleteCostumers";

interface Request {
  documents: { id: string }[];
}

export interface DeleteCostumerApiResponse {
  msg: string;
  deleted: boolean;
}

async function DeleteCostumer(req: NextApiRequest, res: NextApiResponse) {
  const { body } = req;
  const { documents } = <Request>body;

  try {
    const deleted = await deleteCostumers(documents);

    res.status(200).send({ deleted, msg: "Documents deleted." });
  } catch (e: any) {
    res.status(200).send({ msg: e.message });
    console.log(e.message);
  }
}

export default DeleteCostumer;
