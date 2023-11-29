import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { AuthContext } from "../Providers/AuthProvider";

const useCart = () => {
    const myAxios = useAxiosPublic();
    const { user } = useContext(AuthContext);
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await myAxios.get(`/salesProduct?email=${user?.email}`)
            return res.data;
        }
    });
    return [cart, refetch]
};

export default useCart;