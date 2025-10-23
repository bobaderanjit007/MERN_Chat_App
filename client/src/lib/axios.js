import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://zynk.brofound.in/api" : "https://zynk.brofound.in/api",
  withCredentials: true,
});
