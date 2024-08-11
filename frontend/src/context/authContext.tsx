import axiosInstance from "@/constants/axiosInstance";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "@/constants/tokenName";
import { jwtDecode } from "jwt-decode";
import React from "react";

type AuthContext = {
  isAuthenticated: boolean | null;
  user: any;
  setData: (isAuthenticated: boolean | null, user: any) => void;
};

const authContext = React.createContext<AuthContext | null>(null);

type props = {
  children: React.ReactNode;
};

export const AuthContextProvider = ({ children }: props) => {
  const [isAuthorized, setIsAuthorized] = React.useState<boolean | null>(null);
  const [user, setUser] = React.useState<any>(null);
  const refreshToken = async () => {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN);
    try {
      const res = await axiosInstance.post("/api/token/refresh/", {
        refresh: refreshToken,
      });
      if (res.status === 200) {
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        setIsAuthorized(true);
      } else {
        setIsAuthorized(false);
      }
    } catch (error) {
      console.log(error);
      setIsAuthorized(false);
    }
  };

  const auth = async () => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (!token) {
      setIsAuthorized(false);
      return;
    }
    const decoded = jwtDecode(token);
    const tokenExpiration = decoded.exp;
    const now = Date.now() / 1000;

    if (tokenExpiration && tokenExpiration < now) {
      await refreshToken();
    } else {
      setIsAuthorized(true);
    }
  };

  React.useEffect(() => {
    auth().catch(() => setIsAuthorized(false));
  }, []);

  const setData = React.useCallback(
    (isAuthenticated: boolean | null, user: any) => {
      setIsAuthorized(isAuthenticated);
      setUser(user);
    },
    [setIsAuthorized, setUser]
  );

  return (
    <authContext.Provider
      value={{ isAuthenticated: isAuthorized, user: user, setData }}
    >
      {children}
    </authContext.Provider>
  );
};

export const useAuthContext = () => {
  const data = React.useContext(authContext);
  if (!data) {
    throw new Error("Auth context used outsed the provider");
  }
  return data;
};
