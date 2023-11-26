// import { useContext } from "react";
// import { AuthContext } from "../Providers/AuthProvider";
// import useSecureAxios from "./useSecureAxios";
// import { useQuery } from "@tanstack/react-query";

// const useManager = () => {
//     const {user, loading} = useContext(AuthContext);
//     const secureAxios = useSecureAxios();
//     const {data: isManager, isPending} = useQuery({
//         queryKey: ['allStores', user?.email],
//         queryFn: async ()=> {
//             const res = await secureAxios.get(`/allStores/${user?.email}`);
//             // console.log(res.data);
//             return res.data;
//         }
//     })
//     return [isManager, isPending]
// };

// export default useManager;