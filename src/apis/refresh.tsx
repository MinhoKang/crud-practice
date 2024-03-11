import axios from "axios";

// const getNewRefreshToken = async () => {
//   const accessToken = localStorage.getItem("accessToken");
//   const refreshToken = localStorage.getItem("refreshToken");
//   try {
//     const result = await axios.post(
//       `http://test.nowz.me/api/v1/refresh/`,
//       {
//         // body
//         refreshToken,
//       },
//       {
//         // config
//         headers: {
//           Authorization: accessToken,
//         },
//       }
//     );
//     return result.data;
//   } catch (error) {
//     if (error.response.status === 401) {
//       // 401 == 토큰 만료
//       const { accessToken, refreshToken } = await getNewREfreshToken();
//       error.config.headers.Authorization = accessToken;
//       localStorage.setItem("accessToken", accessToken);
//       localStorage.setItem("refreshToken", refreshToken);
//       return (await axios.get(error.config.url, error.config)).data;
//     }
//   }
// };

export const getNewRefreshToken = async () => {
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");
  const result = await axios.post(
    `http://test.nowz.me/api/v1/refresh/`,
    {
      // body
      refreshToken,
    },
    {
      // config
      headers: {
        Authorization: accessToken,
      },
    }
  );
  return result.data;
};
