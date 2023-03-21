import { Costumer } from "entities/Costumer";
import { NextApiRequest, NextApiResponse } from "next";
import { updateCostumer } from "services/updateCostumer";

interface Request {
  costumer: Costumer & { id: string };
}

export interface EditCostumerApiResponse {
  msg: string;
  updated: boolean;
}

async function EditCostumer(req: NextApiRequest, res: NextApiResponse) {
  const { body } = req;
  const { costumer } = <Request>body;

  try {
    const updated = await updateCostumer(costumer);

    res.status(200).send({ updated, msg: "Costumer updated." });
  } catch (e: any) {
    res.status(200).send({ msg: e.message });
    console.log(e.message);
  }
}

export default EditCostumer;
