import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "http://zynk.brofound.in:5001/api" : "http://zynk.brofound.in:5001/api",
  withCredentials: true,
});
