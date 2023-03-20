import { User } from "entities/User";
import { apiRoutes } from "lib/axios";
import { createContext, useState, useEffect } from "react";
import { useMutation } from "react-query";

interface UserDocument extends User {
  id: string;
}

interface UserProviderProps extends User {
  user: UserDocument | null;
  setUser: React.Dispatch<React.SetStateAction<UserDocument | null>>;
  isLoading: boolean;
}

const UserContext = createContext<Partial<UserProviderProps>>({});

export default function UserProvider({ children }: React.PropsWithChildren) {
  const [user, setUser] = useState<UserDocument | null>(null);
  const getUser = useMutation(() => {
    return apiRoutes.get<UserProviderProps["user"]>("/users");
  });
  const isLoading = getUser.isLoading;

  useEffect(() => {
    getUser.mutate(undefined, {
      onSuccess(res) {
        console.log(res.data);
        setUser(res.data);
      },
    });
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, isLoading }}>
      {children}
    </UserContext.Provider>
  );
}
