import { User } from "entities/User";
import { apiRoutes } from "lib/axios";
import { createContext, useState, useEffect } from "react";
import { useQuery } from "react-query";

interface UserDocument extends User {
  id: string;
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

  return (
    <UserContext.Provider value={{ user, isLoading }}>
      {children}
    </UserContext.Provider>
  );
}
