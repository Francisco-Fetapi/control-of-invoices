import { NextApiRequest, NextApiResponse } from "next";

interface Request {
  email: string;
  name: string;
  companyName: string;
  phoneNumber: string;
  companyAddress: string;
  password: string;
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
}

export default register;
