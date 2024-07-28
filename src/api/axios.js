import axios from "axios";
import Cookies from "js-cookie";

const api = axios.create({
  baseURL: "https://hikmet-app.onrender.com/",
});

api.interceptors.request.use(
<<<<<<< HEAD
  config => {
    const token = Cookies.get('access')
=======
  (config) => {
    const token = Cookies.get("token");
>>>>>>> d47015976227fe00bbf33f92b3dff491fced37c7
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
