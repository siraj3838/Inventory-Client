import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAxiosPublic from "./useAxiosPublic";

const useManager = () => {
    const { user} = useContext(AuthContext);
    const [manager, setManager] = useState({})
    const myAxios = useAxiosPublic();
    useEffect(() => {
        myAxios.get('/allStores')
            .then(res => {
                const userDatas = res.data;
                const searchEmail = userDatas.find(userData => userData?.email == user?.email && userData?.role === 'manager')
                // console.log(searchEmail)
                setManager(searchEmail);

            })
            .catch(error => {
                console.log(error);
            })
    }, [myAxios, user?.email])

    return [manager, setManager]
};

export default useManager;