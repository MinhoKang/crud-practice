import axiosInstance from "../utils/api";

export const removeUser = async (userId, accessToken) => {
  try {
    const response = await axiosInstance.delete(`users/${userId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
