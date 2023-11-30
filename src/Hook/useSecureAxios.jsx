import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'https://inventory-manage-server.vercel.app'
    // baseURL: 'http://localhost:5000'
})
const useSecureAxios = () => {
    return axiosSecure
};

export default useSecureAxios;