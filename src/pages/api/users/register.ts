import { User } from "entities/User";
import { NextApiRequest, NextApiResponse } from "next";
import { createUser } from "services/createUser";
import { createUserWithEmailPassword } from "services/createUserWithEmailAndPassword";

interface Request {
  user: User;
}

interface Response {
  id: number;
}

interface ResponseError {
  error: string;
}

async function register(req: NextApiRequest, res: NextApiResponse) {
  const { method, body } = req;
  const { user } = <Request>body;

  const result = await createUser(user);

  return res.status(201).send({ msg: "User created." });
}

export default register;
