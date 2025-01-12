import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://cms.unclespace.ru/api",
    headers: {
        "Content-Type": "application/json",
    }
})

export default axiosInstance