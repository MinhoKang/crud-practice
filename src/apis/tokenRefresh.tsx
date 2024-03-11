import axios from "axios";

let accessToken = localStorage.getItem("accessToken");
let refreshToken = localStorage.getItem("refreshToken");

export const tokenRefresh = async () => {
  try {
    const response = await axios.post(`http://test.nowz.me/api/v1/login/`, {
      refreshToken,
    });
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

tokenRefresh.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const {
      config,
      response: { status },
    } = error;
    if (status === 401) {
      if (error.response.data.message === "Unauthorized") {
        const originRequest = config;
        const response = await tokenRefresh();
        if (response.status === 200) {
          const newAccessToken = response.data.accessToken;
          const newRefreshToken = response.data.refreshToken;
          localStorage.setItem("accessToken", newAccessToken);
          localStorage.setItem("refreshToken", newRefreshToken);
          axios.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
          originRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return axios(originRequest);
        } else if (response.status === 401) {
          alert("로그인이 필요합니다.");
          window.location.href = "/";
        } else {
          alert("다시 시도해주세요.");
          window.location.href = "/";
        }
      }
    }
    return Promise.reject(error);
  }
);

// 요청 인터셉터 추가하기
axios.interceptors.request.use(
  function (config) {
    // 요청이 전달되기 전에 작업 수행
    return config;
  },
  function (error) {
    // 요청 오류가 있는 작업 수행
    return Promise.reject(error);
  }
);

// 응답 인터셉터 추가하기
axios.interceptors.response.use(
  function (response) {
    // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 데이터가 있는 작업 수행
    return response;
  },
  function (error) {
    // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 오류가 있는 작업 수행
    return Promise.reject(error);
  }
);
