// apiService.js
import axios from "axios";

const apiKey = "9b64bcfe576047ba8e5bb7fd24c9e526";
const baseURL = "https://newsapi.org/v2/top-headlines";

const api = axios.create({
  baseURL,
  params: {
    country: "de",
    category: "business",
    apiKey,
  },
});

export const fetchNewsapi = async () => {
  try {
    const response = await api.get("");
    return response.data;
  } catch (error) {
    throw error;
  }
};
