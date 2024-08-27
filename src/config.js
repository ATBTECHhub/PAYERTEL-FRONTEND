import axios from "axios";
export const Axios = axios.create({
  baseURL: "https://payertel-backend.onrender.com/api/v1/",
  headers: {
    "Content-Type": "application/json",
  },
});
