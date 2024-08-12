import axiosInstance from "@/constants/axiosInstance";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "@/constants/tokenName";
import { LoginType } from "@/types/auth";


export default class AuthService {
  static login = async (logindata: LoginType) => {
    try {
      const data = await axiosInstance.post("/auth/token/", logindata);
      console.log(data.data);
      if (data.data) {
        localStorage.setItem(ACCESS_TOKEN, data.data.access);
        localStorage.setItem(REFRESH_TOKEN, data.data.refresh);
        return true;
      }
      return false;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  static logout = ()=>{
    localStorage.clear()
  }
}
