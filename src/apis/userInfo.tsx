import axiosInstance from "../utils/api";

export const getUserInfo = async (userId: string, accessToken: string) => {
  try {
    const response = await axiosInstance.get(`users/${userId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
