import axios from "axios";

export async function request(query) {
  const client = axios.create({
    baseURL: import.meta.env.VITE_APP_CMS_URL,
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_APP_CMS_TOKEN}`,
    },
  });

  return client.post("/", { query });
}
