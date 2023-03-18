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
  email: string;
  name: string;
  companyName: string;
  phoneNumber: string;
  companyAddress: string;
  password: string;
}

interface ResponseError {
  error: string;
}

// this route will get the Authorization Bearer Token in Header.
async function getUser(req: NextApiRequest, res: NextApiResponse) {
  const { method, query } = req;
  const body = <Request>(query as unknown);
}

export default getUser;
