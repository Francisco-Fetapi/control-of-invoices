import { Settings } from "entities/Settings";
import { User } from "entities/User";
import { NextApiRequest, NextApiResponse } from "next";
import { createUser } from "services/createUser";
import updateUserSettings from "services/updateUserSettings";

interface Request {
  settings: Settings;
}

export interface UpdateSettingsApiResponse {
  msg: string;
}

interface ResponseError {
  error: string;
}

async function updateSettings(req: NextApiRequest, res: NextApiResponse) {
  const { body, headers } = req;
  const { settings } = <Request>body;
  const uid = headers.uid as string;

  try {
    await updateUserSettings(uid, settings);

    res.status(200).send({ msg: "Settings saved." });
  } catch (e: any) {
    res.status(200).send({ msg: e.message });
  }
}

export default updateSettings;
