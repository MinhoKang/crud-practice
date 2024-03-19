import axios from "axios";
import axiosInstance from "../utils/api";

export const getUsersList = async (accessToken: string) => {
  try {
    const response = await axiosInstance.get("/users");
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
