import axios from "axios";

const BASEURL = axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        "Content-Type": "application/json",
    },
})

BASEURL.interceptors.request.use(
    (config) => {
      const token = window.sessionStorage.getItem("token");
      if (token) {
        config.headers.Authorization = "Bearer " + token;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
)

export default BASEURL