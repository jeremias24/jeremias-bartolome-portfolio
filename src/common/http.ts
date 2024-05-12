import axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: "http://localhost/lms_backend/api",
  headers: {
    "Content-type": "application/json",
  },
});

export default apiClient;