import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
  // process.env.ENV === "DEVELOPMENT"
  //   ? "http://localhost:3001"
  //   : "https://awdiz-6.com",
  withCredentials: true,
});

export default api;
