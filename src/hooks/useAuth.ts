import { UserContext, UserProviderProps } from "context/UserProvider";
import { useContext } from "react";

export default function useAuth() {
  const resources = useContext(UserContext) as UserProviderProps;

  console.log("hook user", resources);
  return resources;
}
