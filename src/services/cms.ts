import axios from "axios";

export async function request(query: string) {
  const client = axios.create({
    baseURL: import.meta.env.VITE_APP_CMS_URL,
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_APP_CMS_TOKEN}`,
    },
  });

  client.interceptors.response.use((response) => {
    return response.data.data;
  });

  return client.post<any, any>("/", { query });
}
