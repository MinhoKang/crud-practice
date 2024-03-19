import { UpdatedUserInfo } from "../types/types";
import axiosInstance from "../utils/api";

export const editInfo = async (
  userId: string,
  accessToken: string,
  updatedUserInfo: UpdatedUserInfo
) => {
  try {
    const response = await axiosInstance.put(
      `users/${userId}/`,
      updatedUserInfo,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
