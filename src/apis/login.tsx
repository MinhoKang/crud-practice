import axios from "axios";
import axiosInstance from "../utils/api";

// export const login = (email, password) => {
//   return api
//     .post(`login/`, { email, password })
//     .then((result) => {
//       return result;
//     })
//     .catch((error) => {
//       console.error(error);
//       throw error;
//     });
// };

// 방법1 => result를 반환하지 못 함
// export const login = async (email, password) => {
//   await axios
//     .post(`http://test.nowz.me/api/v1/login/`, { email, password })
//     .then((result) => {
//       return result.data.data;
//     })
//     .catch((error) => {
//       console.error(error);
//       throw error;
//     });
// };

// 방법 2 => 성공
// export const login = async (email, password) => {
//   try {
//     const result = await axios.post(`http://test.nowz.me/api/v1/login/`, {
//       email,
//       password,
//     });
//     return result.data.data;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };
// 방법 3 => 성공

// export const login = async (email, password) => {
//   const result = await axios.post(`http://test.nowz.me/api/v1/login/`, {
//     email,
//     password,
//   });
//   return result.data.data;
// };
export const login = async (email, password) => {
  const response = await axiosInstance.post(`login/`, { email, password });
  // const result = await axios.post(`http://test.nowz.me/api/v1/login/`, {
  //   email,
  //   password,
  // });
  return response.data.data;
};
