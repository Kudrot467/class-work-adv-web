"use client"
import axios from "axios";

const axiosPublic=axios.create({
    baseURL:'http://localhost:3000'
})
axiosPublic.interceptors.response.use(response => {
    return response;
  }, error => {
    if (error.response.status === 400) {
      // Handle the 400 error here
      console.error('Request failed with status code 400');
    }
    return Promise.reject(error);
  });
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;