import axios from "axios";

export const instance = axios.create({
  baseURL: "https://v6.exchangerate-api.com/v6",
  headers: { Authorization: "Bearer 8d90b7fd1577f3e774647ee2" },
});
