import { useEffect, useState } from "react";
import useAxiosPublic from "../../../../Hook/useAxiosPublic";

const UsersSection = () => {
    const myAxios = useAxiosPublic();
    const [users, setUsers] = useState([]);
    const [shopUsers, setShopUsers] = useState({});

    useEffect(() => {
        myAxios.get('/allStores')
            .then(res => {

                setShopUsers(res?.data)
            })
    }, [myAxios])
    useEffect(() => {
        myAxios.get('/allUsers')
            .then(res => {

                setUsers(res?.data)
            })
    }, [myAxios,])
    return (
        <div>
            <div>
                {
                    users.map(user => <div key={user._id}>
                        <h2>{user.email}</h2>
                    </div>)
                }
            </div>
        </div>
    );
};

export default UsersSection;