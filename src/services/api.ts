import axios from "axios";

export function api() {
  const domain = import.meta.env.DEV
    ? "http://localhost:3000"
    : "https://abdulhdr.com";
  const client = axios.create({
    baseURL: domain,
  });
  return client;
}
