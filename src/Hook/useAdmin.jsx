import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useSecureAxios from "./useSecureAxios";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
    const {user, loading} = useContext(AuthContext);
    const myAxios = useSecureAxios();
    const {data: isAdmin, isPending: isAdminLoading} = useQuery({
        queryKey: [user?.email, 'adminIs'],
        enabled: !loading,
        queryFn: async () => {
            const res = await myAxios.get(`/allUsers/${user?.email}`);
            return res.data.admin;
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;