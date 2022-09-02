import axios from "axios";

const baseUrl = "https://youtube-v31.p.rapidapi.com";
const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "b7f00f4db2mshd471bbbb1b7b924p1f299djsnc58e7491e227",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromApi = async (url) => {
  const response = await axios.get(`${baseUrl}/${url}`, options);
  return response.data;
};
