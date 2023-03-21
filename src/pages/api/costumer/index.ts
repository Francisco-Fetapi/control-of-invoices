import { NextApiRequest, NextApiResponse } from "next";
import getCostumers, { CostumerDoc } from "services/getCostumers";

export interface GetCostumersApiResponse {
  costumers: CostumerDoc[];
}

async function getCostumersApi(req: NextApiRequest, res: NextApiResponse) {
  try {
    const uid = req.headers.uid as string;
    const costumers = await getCostumers(uid);
    res.status(200).send({ costumers });
  } catch (e: any) {
    res.status(200).send({ msg: e.message });
  }
}

export default getCostumersApi;
