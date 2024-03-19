import axios from "axios";
import dayjs from "dayjs";
import { jwtDecode } from "jwt-decode";

const baseURL = "http://test.nowz.me/api/v1/";
const axiosInstance = axios.create({
  baseURL,
});

// axiosInstace를 이용한 api호출을 할 때 마다 헤더에 토큰을 담아서 보내도록 설정
axiosInstance.interceptors.request.use(async (req) => {
  // interceptor request를 할 때마다 로컬 스토리지에 있는 토큰을 받아오기
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    req.headers.Authorization = `Bearer ${accessToken}`;
  }
  return req;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      try {
        const prevRefreshToken = localStorage.getItem("refreshToken");
        const {
          data: {
            data: { accessToken, refreshToken },
          },
        } = await axios.post(
          `http://test.nowz.me/api/v1/refresh/`,
          { refresh: prevRefreshToken }
          // { refresh: refreshToken, access: accessToken }
        );
        console.log("new access Token", accessToken);
        console.log("new refresh Token", refreshToken);

        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        error.config.headers["Authorization"] = `Bearer ${accessToken}`;
        console.log("error.config :", error.config);
        return axiosInstance(error.config);
      } catch (error) {
        throw error;
      }
    }
    return Promise.reject(error);
  }
);
export default axiosInstance;

// 1. APP이 실행되는 단계에서 토큰을 확인하고(로컬스토리지)->
// 2.로그인 요청을 보내고 토큰을 받아서 저장한다.
