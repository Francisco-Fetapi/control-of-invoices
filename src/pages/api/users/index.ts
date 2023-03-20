import { NextApiRequest, NextApiResponse } from "next";
import getAllUserData from "services/getAllUserData";

async function getUser(req: NextApiRequest, res: NextApiResponse) {
  try {
    const user = await getAllUserData(req.headers.uid as string);
    res.status(200).send({ user });
  } catch (e: any) {
    res.status(200).send({ msg: e.message });
  }
}

export default getUser;
