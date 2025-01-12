import axiosInstance from "@/api/axios-instance";

interface Product {
    title: string;
}

const fetchProducts = async () => {
    const result = await axiosInstance.get('/products')
    console.log(result);
    return result
}

export default fetchProducts