import { User } from "entities/User";
import { NextApiRequest, NextApiResponse } from "next";

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
  const { method, query } = req;
  const body = <Request>(query as unknown);

  return res.send({ body });
}

export default register;
