import { Costumer } from "entities/Costumer";
import { NextApiRequest, NextApiResponse } from "next";
import { createCostumer } from "services/createCostumer";

interface Request {
  costumer: Costumer;
}

export interface AddCostumerApiResponse {
  msg: string;
  created: boolean;
}

async function updateSettings(req: NextApiRequest, res: NextApiResponse) {
  const { body, headers } = req;
  const { costumer } = <Request>body;
  const uid = headers.uid as string;

  try {
    const created = await createCostumer(uid, costumer);

    res.status(200).send({ created, msg: "Settings saved." });
  } catch (e: any) {
    res.status(200).send({ msg: e.message });
  }
}

export default updateSettings;
