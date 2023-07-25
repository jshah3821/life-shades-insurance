import axios from "axios";
// axios.defaults.withCredentials =true;
const axiosInstance = axios.create({
  //  withCredentials: true,
  baseURL: process.env.REACT_APP_BASE_URL,
});
export default axiosInstance;
