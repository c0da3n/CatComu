import axios from "axios";

export const apiInstance = (withCredentials?: boolean) =>
  axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: withCredentials ?? true,
    headers: {
      "Content-Type": "application/json",
    },
  });
