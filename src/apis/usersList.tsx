import axios from "axios";
import axiosInstance from "../utils/api";

export const getUsersList = async (accessToken) => {
  try {
    const response = await axiosInstance.get("/users/", {
      headers: {
        //   withCredentials: true,
        Authorization: `Bearer ${accessToken}`,
      },
    });
    // const result = await axios.get(
    //   `http://test.nowz.me/api/v1/users/`,

    //   {
    //     headers: {
    //       //   withCredentials: true,
    //       Authorization: `Bearer ${accessToken}`,
    //     },
    //   }
    // );
    return response.data.data.results;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
