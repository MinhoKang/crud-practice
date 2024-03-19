import axios from "axios";
import axiosInstance from "../utils/api";

export const signUp = async (
  email: string,
  password: string,
  name: string,
  phoneNumber: string,
  birthday: string,
  gender: string,
  isStudent: boolean
) => {
  try {
    const response = await axiosInstance.post(`users/`, {
      // body
      email,
      password,
      profile: {
        name,
        contact: phoneNumber,
        birthDate: birthday,
        gender,
      },
      type: isStudent,
    });
    // const result = await axios.post(`http://test.nowz.me/api/v1/users/`, {
    //   // body
    //   email,
    //   password,
    //   profile: {
    //     name,
    //     contact: phoneNumber,
    //     birthDate: birthday,
    //     gender,
    //   },
    //   type: isStudent,
    // });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// export const signUp = async (
//   email,
//   password,
//   name,
//   birthday,
//   gender,
//   isStudent
// ) => {
//   const result = await axios.post(`http://test.nowz.me/api/v1/users/`, {
//     // body
//     email,
//     password,
//     profile: {
//       name,
//       birthDate: birthday,
//       gender,
//     },
//     type: isStudent,
//   });
//   return result;
// };
