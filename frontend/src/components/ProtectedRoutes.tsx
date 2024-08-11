import React from "react";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axiosInstance from "@/constants/axiosInstance";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "@/constants/tokenName";

type props = {
  children: React.ReactNode;
};

const ProtectedRoute = ({ children }: props) => {
  const [isAuthorized, setIsAuthorized] = React.useState<boolean | null>(null);
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


  if (isAuthorized === null) {
    return <div>...Loading</div>;
  }

  return isAuthorized ? children : <Navigate to={"/"} />;
};

export default ProtectedRoute;
