import axios from "axios";

export const getUsersList = async (accessToken) => {
  try {
    const result = await axios.get(
      `http://test.nowz.me/api/v1/users/`,

      {
        headers: {
          //   withCredentials: true,
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return result.data.data.results;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
