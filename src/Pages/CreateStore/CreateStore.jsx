import { Helmet } from "react-helmet-async";
import Headline from "../../Shared/Headline";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Shared/Loading";



const CreateStore = () => {
    const { user, loading } = useContext(AuthContext);
    const myAxios = useAxiosPublic();
    const navigate = useNavigate();

    const { data: normalUser = {}, refetch, isPending } = useQuery({
        queryKey: ['money', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await myAxios.get(`/allUsersSea/${user?.email}`)
            refetch();
            return res?.data
        }
    })
    console.log(normalUser[0]?._id);

    // if(isPending){
    //     // window.location.reload();
    //     return <Loading></Loading>
    // }
    const createNewShop = (e) => {
        e.preventDefault();
        const form = e.target;
        const shopName = form.shopName.value;
        const userEmail = form.userEmail.value;
        const userName = form.userName.value;
        const shopLocation = form.shopLocation.value;
        const shopInfo = form.shopInfo.value;
        const shopLogo = form.shopLogo.value


        const newStore = { shopName, email: userEmail, shopLogo, userName, shopLocation, shopInfo }
        // console.log(newStore);
        myAxios.post('/allStores', newStore)
            .then(res => {
                // console.log(res.data);
                if (res.data.insertedId === null) {
                    return toast.error(res.data.message)
                }
                if (res.data.insertedId) {
                    myAxios.patch(`/allStores/manager/${res?.data?.insertedId}`)
                        .then(res => {
                            if (res?.data?.modifiedCount > 0) {
                                myAxios.patch(`/allUsersSearch/${normalUser[0]?._id}`, newStore)
                                    .then(res => {
                                        // console.log(res.data);
                                        if (res?.data?.modifiedCount > 0) {
                                            toast.success('Store Create Successfully')
                                            navigate('/dashboard')
                                        }
                                    })
                            }
                        })
                        .catch(err => {
                            console.log(err);
                        })
                }
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="px-5 lg:px-0">
            <Helmet>
                <title>MGI | Create Store</title>
            </Helmet>
            <Headline headline={'Create Your Own Store'}></Headline>
            <div data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000" className="max-w-screen-lg mx-auto bg-[#7fabfc98] px-5 py-5 rounded-md">
                <form onSubmit={createNewShop} className="text-[#000000a6] font-medium">
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="">● Shop Name ●</span>
                            </label>
                            <input type="text" required name="shopName" placeholder="Type Your Shop Name" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="">● Shop-Owner Email ●</span>
                            </label>
                            <input type="text" name="userEmail" defaultValue={user?.email} readOnly className="input input-bordered w-full" />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="">● Shop Logo ●</span>
                            </label>
                            <input type="text" name="shopLogo" placeholder="Type Shop Logo URL" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="">● Shop-Owner Name ●</span>
                            </label>
                            <input type="text" name="userName" defaultValue={user?.displayName} readOnly className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="">● Shop Location ●</span>
                            </label>
                            <input type="text" required name="shopLocation" placeholder="Shop Location Please" className="input input-bordered w-full" />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="">● Shop Info ●</span>
                            </label>
                            <textarea name="shopInfo" id="" required cols="30" placeholder=" Type Some Shop Information" className="p-3 rounded-md"></textarea>
                        </div>
                    </div>
                    <div className="mt-5 md:w-3/12 mx-auto">
                        <input type="submit" value={'Create Shop'} className="bg-[#2c6be0ec] hover:bg-[#245dc7] font-semibold hover:scale-110 duration-600 transition-all py-2 px-2 rounded-lg text-white w-full" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateStore;