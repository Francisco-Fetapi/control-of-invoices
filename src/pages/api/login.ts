import { NextApiRequest, NextApiResponse } from "next";
import { loginUserWithEmailPassword } from "services/loginUserWithEmailAndPassword";
import nookies from "nookies";
import { User } from "entities/User";
import { UserCredential } from "firebase/auth";

interface Request {
  user: User;
}

export interface LoginApiResponse {
  msg: string;
  user: User & UserCredential["user"];
}

interface ResponseError {
  error: string;
}

async function login(req: NextApiRequest, res: NextApiResponse) {
  const { body } = req;
  const {
    user: { email, password },
  } = <Request>body;

  try {
    const result = await loginUserWithEmailPassword({ email, password });
    const user = result.user;

    res.status(201).send({ user, msg: "User logged." });
  } catch (e: any) {
    res.status(200).send({ msg: e.message });
  }
}

export default login;
