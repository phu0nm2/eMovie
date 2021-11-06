import axios from "axios";
import { CYBERSOFT_TOKEN } from "../constants/apiKey";

const axiosClient = axios.create({
  baseURL: "https://movienew.cybersoft.edu.vn/api",
  headers: {
    TokenCybersoft: CYBERSOFT_TOKEN,
  },
});

export default axiosClient;
