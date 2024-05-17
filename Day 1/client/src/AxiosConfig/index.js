import axios from "axios";

const api = axios.create({
  baseURL: "https://awdiz-6-backend.onrender.com/",
  // process.env.ENV === "DEVELOPMENT"
  //   ? "http://localhost:3001"
  //   : "https://awdiz-6-backend.onrender.com/",
  withCredentials: true,
});

export default api;
