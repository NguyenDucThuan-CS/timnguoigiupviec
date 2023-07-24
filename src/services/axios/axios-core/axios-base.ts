import axios, { AxiosError, AxiosResponse } from "axios";
import { ETokenName } from "../../../constants";
import { readCookie } from "../../../utils";
import { logout } from "../../../utils";

const baseURL = "";
const token = readCookie(ETokenName.YOCHAT_ACCESS_KEY) || "";

const axiosBase = axios.create({
  baseURL: baseURL + "api/",
  headers: {
    "content-type": "application/json",
    Authorization: "Bearer " + token,
    channel: "WEB",
    component: "yochat",
  },
});
axiosBase.interceptors.response.use(
  (res: AxiosResponse<{ content: any; message: string; result: number }>) => {
    if (
      res.data.message === "Không có người dùng tương ứng. Vui lòng thử lại."
    ) {
      logout();
    }
    return res;
  },
  (err: AxiosError) => {
    if (err.response?.status === 401) {
      logout();
    }

    throw err;
  }
);

export default axiosBase;
