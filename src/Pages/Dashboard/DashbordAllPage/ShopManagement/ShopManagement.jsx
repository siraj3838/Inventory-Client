import { Link } from "react-router-dom";
import Headline from "../../../../Shared/Headline";
import useAxiosPublic from "../../../../Hook/useAxiosPublic";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";
import AllProduct from "./AllProduct";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const ShopManagement = () => {
    const myAxios = useAxiosPublic();
    const { user } = useContext(AuthContext);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        myAxios.get(`/allProducts?email=${user?.email}`)
            .then(res => {
                // console.log(res.data);
                const allProducts = res.data;
                // const managerProduct = allProducts.filter(item => item.email == user?.email)
                setProducts(allProducts);
            })
    }, [myAxios, user?.email])
    console.log(products);

    const deleteProduct = (id) => {
        // console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                myAxios.delete(`/allProducts/${id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = products.filter(item => item._id !== id)
                            setProducts(remaining);
                        }
                    })
            }
        });
    }
    return (
        <div>
            <Helmet>
                <title>
                    MGI | Dashboard | Shop Management
                </title>
            </Helmet>
            <Headline headline={'Shop Management'}></Headline>
            <div className="flex justify-between max-w-screen-sm mx-auto border-y-2 border-black md:mt-12 lg:mt-0">
                {
                    products?.length == 0 ? <h2 className="p-3">Total 0 Product Added, Please Add some Product</h2>
                        :
                        <h2 className="p-3 text-sm md:text-lg font-medium"><span className="font-bold">{user?.displayName}</span> Total {products?.length} Product Added</h2>
                }
                <Link to={'/dashboard/addToProduct'}>
                    <button className="bg-blue-500 rounded-none border-r-2 border-black text-white font-semibold text-lg py-3 px-2 hover:bg-blue-600">Add a Product</button>
                </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-5 md:px-8 my-8">
                {
                    products.map(product => <AllProduct deleteProduct={deleteProduct} key={product._id} product={product}></AllProduct>)
                }
            </div>
        </div>
    );
};

export default ShopManagement;