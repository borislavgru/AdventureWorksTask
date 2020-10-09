import axios from "axios";

const BASE_URL = "https://localhost:44394/api";

export const api = axios.create({
  baseURL: BASE_URL,
  // headers: { "Content-Type": "application/x-www-form-urlencoded" },
});
