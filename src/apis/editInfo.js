import axiosInstance from "../utils/api";

export const editInfo = async (userId, accessToken) => {
  try {
    const response = await axiosInstance.put(`users/${userId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response;
  } catch (error) {}
};
