import { UserDocument } from "context/UserProvider";
import { Settings } from "entities/Settings";

export const userDefaultSettings: Settings = {
  limit: 81000,
  sendEmail: false,
  sendSMS: false,
};

export default function getSettings(user: UserDocument | null) {
  return user?.settings || userDefaultSettings;
}
