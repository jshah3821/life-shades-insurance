import { toast } from "react-toastify";
import axiosInstance from "./axios";
const makeRequest = async (methods: string, url: string, body?: any,formdata?:boolean) => {
  let config = {
    method: methods,
    url,
    headers: {
      "Content-Type": formdata ? "multipart/form-data":"application/json",
      Authorization: `Bearer: ${localStorage.getItem("token")}`,
    },
    data: body,
  };
  

  return axiosInstance(config)
  .then((response:any) => {
     const data = {
        status: response?.status,
        data: response?.data,
      };
      if (data.status === 200) {
        toast.success(data.data.msg)
        return data;
      }
    })
    .catch((error) => {
       toast.error(error?.response?.data?.msg) 
      if (error?.response?.status === 401) {
        localStorage.clear();
        window.location.replace("/login");
      } else if(error?.response) {
        return  error?.response?.data
      } else {
         toast.error("something went wrong!") 
         return error.message
      }
    });
};
export default makeRequest;
