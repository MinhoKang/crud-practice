import axios from "axios";

export const signUp = async (
  email,
  password,
  name,
  phoneNumber,
  birthday,
  gender,
  isStudent
) => {
  try {
    const result = await axios.post(`http://test.nowz.me/api/v1/users/`, {
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
    return result.data;
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
