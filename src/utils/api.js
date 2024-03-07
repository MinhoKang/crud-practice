import axios from "axios";
import dayjs from "dayjs";
import { jwtDecode } from "jwt-decode";

let accessToken = localStorage.getItem("accessToken");
let refreshToken = localStorage.getItem("refreshToken");
const baseURL = "http://test.nowz.me/api/v1/";
const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  },
});

axiosInstance.interceptors.request.use(async (req) => {
  if (!accessToken) {
    accessToken = localStorage.getItem("accessToken");
    req.headers.Authorization = `Bearer ${accessToken}`;
  }
  const user = jwtDecode(accessToken);
  const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
  console.log("isExpired", isExpired);
  if (!isExpired) return req;
  const response = await axios.post(`${baseURL}refresh/`, {
    refresh: refreshToken,
  });
  localStorage.setItem("accessToken", response.data.accessToken);

  return req;
});

export default axiosInstance;
