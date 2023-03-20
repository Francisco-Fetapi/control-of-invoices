import { User } from "entities/User";
import { NextApiRequest, NextApiResponse } from "next";
import { createUser } from "services/createUser";

interface Request {
  user: User;
}

export interface RegisterApiResponse {
  uid?: string;
  msg: string;
}

interface ResponseError {
  error: string;
}

async function register(req: NextApiRequest, res: NextApiResponse) {
  const { body } = req;
  const { user } = <Request>body;

  try {
    const result = await createUser(user);
    let uid = result.userRef.uid;

    res.status(201).send({ uid, msg: "User created." });
  } catch (e: any) {
    res.status(200).send({ msg: e.message });
  }
}

export default register;
