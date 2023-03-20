import { User } from "entities/User";
import { NextApiRequest, NextApiResponse } from "next";
import { createUser } from "services/createUser";
import nookies from "nookies";

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
  const { body } = req;
  const { user } = <Request>body;

  try {
    const result = await createUser(user);
    //TODO: save any info on cookies
    nookies.set({ res }, "email", user.email);
    nookies.set({ res }, "password", user.password);

    res.status(201).send({ msg: "User created." });
  } catch (e: any) {
    res.status(400).send({ error: e.message });
  }
}

export default register;
