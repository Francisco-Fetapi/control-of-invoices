import { NextApiRequest, NextApiResponse } from "next";
import { logoutFirebase } from "services/logoutFirebase";

async function logout(req: NextApiRequest, res: NextApiResponse) {
  try {
    await logoutFirebase();
    res.status(200).send({ msg: "logout" });
  } catch (e: any) {
    res.status(200).send({ msg: e.message });
  }
}

export default logout;
