import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useManagerRouter = () => {

    const axiosSecure = useAxiosPublic();

    const {user, loading} = useContext(AuthContext)
    const { data : isManager, isPending, refetch } = useQuery({
        queryKey: ["member", user?.email],
        enabled : !loading,
        queryFn : async () =>{
            const res = await axiosSecure.get(`/allStoreManager/${user?.email}`);
            refetch();
            return res?.data?.isManager;
        }
    })

    return [isManager, isPending, refetch];
};

export default useManagerRouter;