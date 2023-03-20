import { NextApiRequest, NextApiResponse } from "next";

interface Request {
  login: string;
  password: string;
}

interface Response {
  token: string;
  user: {
    id: number;
    name: string;
    email: string;
  };
}

interface ResponseError {
  error: string;
}

async function login(req: NextApiRequest, res: NextApiResponse) {
  const { method, query } = req;
  const body = <Request>(query as unknown);

  // TODO: return status 200 even on error and its message to show on front-end.
  res.status(500).send({ msg: "Ola Mundo!" });
}

export default login;
