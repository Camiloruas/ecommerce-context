import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

if (!API_URL) {
  throw new Error("VITE_API_URL não definida. Configure no arquivo .env");
}

export const api = axios.create({
  baseURL: API_URL,
});

export const endpoints = {
  products: "/products",
};
