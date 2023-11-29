import { useContext, useState } from "react";
import useAxiosPublic from "../../../../Hook/useAxiosPublic";
import Headline from "../../../../Shared/Headline";
import { AuthContext } from "../../../../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../../Shared/Loading";

const SalesCollection = () => {
    const myAxios = useAxiosPublic();
    const { user } = useContext(AuthContext);
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();


    const { data: productsAll = [], refetch , isPending} = useQuery({
        enabled: !!user?.email,
        queryKey: ['menu', user?.email],
        queryFn: async () => {
            const res = await myAxios.get(`/allProducts?email=${user?.email}`)
            setProducts(res?.data)
            return res.data;
        }
    })
    console.log(products);
    if (isPending) {
        return <Loading></Loading>
    }

    const handleSearch = e => {
        e.preventDefault();
        const form = e.target;
        const searchText = form.searchText.value;
        const searchData = products.filter(item => item._id == searchText);
        setProducts(searchData)
    }

    const handleCheckOutCart = (item) => {
        // const currentData = new Date();
        // console.log(item);
        const product = { productName: item?.productName, image: item?.image, productQuantity: item?.productQuantity - 1, productLocation: item?.productLocation, productionCost: item?.productionCost, profitMargin: item?.profitMargin, discount: item?.discount, productDescription: item?.productDescription, category: item?.category, shopId: item?.shopId, shopName: item?.shopName, email: item?.email, sellingPrice: item?.sellingPrice, oldDate: item?.date, saleCount: item?.saleCount + 1, totalPrice: item?.totalPrice, discountDollar: item?.discountDollar }
        // console.log(product);
        myAxios.post('/salesProduct', product)
            .then(res => {
                // console.log(res.data);
                if (res?.data?.insertedId) {
                    const findItem = products.find(items => items._id == item._id)
                    // console.log(findItem.productQuantity);
                    // console.log(findItem.saleCount);
                    const quantity = findItem.productQuantity;
                    const sales = findItem.saleCount;
                    myAxios.put(`/quantityUpdate/${item?._id}`, { productQuantity: quantity, saleCount: sales })
                        .then(res => {
                            // console.log(res.data);
                            if (res.data.modifiedCount > 0) {
                                toast.success('This Product Added Check-Out Cart');
                                refetch()
                            }
                        })
                }
            })
    }
    const handleProceed = () => {
        navigate('/dashboard/checkOutCart')
    }
    return (
        <div className="">
            <Headline headline={'Sales-Collection'}></Headline>
            <div className="max-w-screen-lg grid md:grid-cols-6 gap-4 items-center mx-auto bg-slate-100 mb-6">
                <form className="col-span-5" onSubmit={handleSearch}>
                    <input className="w-4/5 py-2 border-b-2 border-t-2 border-l-2 border-black px-4" type="text" name="searchText" placeholder="Search Here" />
                    <input className="w-1/5 bg-blue-500 border-r-2 border-black text-white font-semibold text-lg py-2 px-2 hover:bg-blue-600" type="submit" value="Search" />
                </form>
                <button onClick={handleProceed} className="bg-blue-500 text-white font-semibold py-3 px-2 hover:bg-blue-600 rounded-md">Proceed Checkout</button>
            </div>
            <hr />
            <div className="my-10">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr className=" text-center text-sm md:text-[9px] md:text-left lg:justify-between flex flex-col md:flex-row">
                            <th className="lg:text-lg">Product Image</th>
                            <th className="lg:text-lg md:pl-10 lg:pl-24">Product Id</th>
                            <th className="lg:text-lg md:pl-20 lg:pl-28">Product Name</th>
                            <th className="lg:text-lg">Quantity</th>
                            <th className="lg:text-lg">Discount</th>
                            <th className="lg:text-lg">Selling Price</th>
                            <th className="lg:text-lg">Add For Check-out</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products?.map((item) => <tr className="flex flex-col md:flex-row lg:text-lg text-base md:text-[9px] lg:justify-between text-center md:text-left" key={item._id}>
                                <td>
                                    <hr />
                                    <div className="flex justify-center">
                                        <Link to={`/dashboard/checkOut/${item?._id}`}>
                                            <img className="lg:w-36 h-20 w-20 lg:h-36 rounded-md" src={item?.image} alt="" />
                                        </Link>
                                    </div>
                                </td>
                                <th className="flex items-center justify-center md:justify-start"><h4 className="lg:text-base">{item?._id}</h4></th>
                                <td className="flex items-center justify-center md:justify-start"><h3 className="lg:text-lg md:pl-1 lg:pl-7">{item?.productName}</h3></td>
                                <td className="flex items-center justify-center md:justify-start"><h5 className="lg:text-lg md:pl-5 lg:pl-14">{item?.productQuantity}</h5></td>
                                <td className="flex items-center justify-center md:justify-start"><h3 className="md:pl-7 lg:pl-14">{item?.discountDollar}$</h3></td>
                                <td className="flex items-center justify-center md:justify-start"><h5 className="md:pl-7 lg:pl-11">{item?.totalPrice?.toFixed(2)}$</h5></td>
                                <td className="md:pl-10 lg:pl-20 flex items-center justify-center md:justify-start">
                                    <button onClick={() => handleCheckOutCart(item)} className="bg-blue-500 border-r-2 border-black text-white font-semibold text-sm lg:text-lg py-1 px-2 lg:py-3 lg:px-2 hover:bg-blue-600 rounded-md">Check Out</button>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SalesCollection;