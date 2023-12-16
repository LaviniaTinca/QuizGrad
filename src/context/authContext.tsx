import { createContext, useContext, useState } from "react";

interface AuthContextProps {
  accessToken: string | null;
  isAuth: boolean;
  isAdmin: boolean;
  storeData: (
    token: string | null,
    isAuth: boolean,
    userIsAdmin: boolean
  ) => void | undefined;
}

interface AuthProviderProps {
  children: JSX.Element;
}

const AuthContext = createContext<Partial<AuthContextProps>>({});
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [isAuth, setIsAuth] = useState<boolean>(false);

  const storeData = (
    token: String | null,
    isAuth: boolean,
    userIsAdmin: boolean
  ) => {
    if (typeof token === "string") {
      setAccessToken(token);
      setIsAdmin(userIsAdmin);
      setIsAuth(isAuth);
    } else {
      console.error("Invalid token type.");
    }
  };

  const contextValue: AuthContextProps = {
    accessToken,
    isAuth,
    isAdmin,
    storeData,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
