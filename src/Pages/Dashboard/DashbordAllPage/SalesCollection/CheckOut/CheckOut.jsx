import { useParams } from "react-router-dom";
import useAxiosPublic from "../../../../../Hook/useAxiosPublic";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../../Providers/AuthProvider";

const CheckOut = () => {
    const { id } = useParams();
    const myAxios = useAxiosPublic();
    const { user } = useContext(AuthContext);
    const [products, setProducts] = useState([]);


    useEffect(() => {
        myAxios.get(`/allProducts?email=${user?.email}`)
            .then(res => {
                // console.log(res.data);
                const allProducts = res.data;
                const findData = allProducts.find(item => item._id == id);
                setProducts(findData);
            })
    }, [myAxios, user?.email, id])
    console.log(products);
    const { productName, image, productQuantity, productLocation, productionCost, profitMargin, discount, productDescription, category, shopId, shopName, email, sellingPrice, date, saleCount } = products || {}
    return (
        <div className="px-5 my-10">
            <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
                <div className="lg:col-span-2">
                    <img className="w-full md:h-40 lg:h-80" src={image} alt="" />
                </div>
                <div className="col-span-2 px-6 space-y-2">
                    <h2 className="md:text-2xl text-xl lg:text-3xl font-medium">Product Information</h2>
                    <hr className="pb-4"/>
                    <h2 className="text-xl font-medium">Product Name: {productName}</h2>
                    <h2 className="font-medium text-lg">Category: {category}</h2>
                    <h4 className="font-medium text-lg">Total Price: <span className="text-lg">{sellingPrice}$</span></h4>
                    <h4 className="font-medium text-pink-700 text-lg">Offer: <span className="text-lg text-black">{discount}%</span> <span className="text-lg text-green-700">Discount</span> </h4>
                    <h4 className="font-medium">Sale Count: {saleCount} Items</h4>
                    <p className="font-medium text-gray-400 pt-4">Adding Time: {date}</p>
                    <p className="font-medium text-gray-400">Location: {productLocation}</p>
                </div>
            </div>
            <hr className="my-4"/>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
                <div className="col-span-2 border-r-2">
                    <h3 className="text-2xl font-medium mb-3 pb-2 border-b-2">Shop Owner Information</h3>
                    <h3 className="font-medium">Shop Name: <span className="text-xl font-semibold">{shopName}</span></h3>
                    <h3 className="text-gray-400 pt-3">Shop ID: {shopId}</h3>
                    <p className="text-gray-400 font-medium">Owner Email: <span>{email}</span></p>
                </div>
                <div className="lg:col-span-3 px-5">
                    <h3 className="text-2xl font-medium">Product Details</h3>
                    <h3 className="font-medium">Product Cost: <span className="text-lg font-medium">{productionCost}$</span></h3>
                    <h3 className="font-medium">Product Margin: <span className="text-lg font-medium">{profitMargin?.toFixed(2)}$</span></h3>
                    <h4 className="font-medium">Total Quantity: <span className="text-lg">{productQuantity}</span></h4>
                    <h5 className="text-xl font-medium mt-2">Description</h5>
                    <p className="text-gray-400 font-medium">{productDescription}</p>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;