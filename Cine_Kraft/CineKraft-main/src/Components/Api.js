import axios from "axios";

// const API_URL = "https://af04-210-18-139-25.in.ngrok.io/";
const API_URL = "http://localhost:8000";
// const API_URL = process.env.REACT_APP_DEV_BASE_URL

const Api = axios.create({
  baseURL: API_URL,
});

export default Api;
