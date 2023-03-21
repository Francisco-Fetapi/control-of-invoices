import { Settings } from "entities/Settings";
import { User } from "entities/User";
import { apiRoutes } from "lib/axios";
import { isProtected } from "middleware";
import { useRouter } from "next/router";
import { createContext, useState, useEffect } from "react";
import { useQuery } from "react-query";

export interface UserDocument extends User {
  id: string;
  settings: Settings;
}

export interface UserProviderProps {
  user: UserDocument | null;
  isLoading: boolean;
}

export const UserContext = createContext<Partial<UserProviderProps>>({});

export default function UserProvider({ children }: React.PropsWithChildren) {
  const getUser = useQuery("user", () => {
    let res = apiRoutes.get<{ user: UserDocument }>("/users");
    return res;
  });
  const user = getUser.data?.data.user;
  const isLoading = getUser.isLoading;
  const router = useRouter();

  useEffect(() => {
    if (isProtected(router.pathname)) {
      if (!user && !isLoading) {
        console.log("Nenhum usuario encontrado!");
        getUser.refetch();
      }
    }
  }, [router.pathname]);

  return (
    <UserContext.Provider value={{ user, isLoading }}>
      {children}
    </UserContext.Provider>
  );
}
