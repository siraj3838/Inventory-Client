import { Helmet } from "react-helmet-async";
import Headline from "../../../../Shared/Headline";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import useAxiosPublic from "../../../../Hook/useAxiosPublic";
import { AuthContext } from "../../../../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const UpdateProduct = () => {
    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const myAxios = useAxiosPublic();
    const [product, setProduct] = useState({});
    useEffect(() => {
        myAxios.get(`/allProducts?email=${user?.email}`)
            .then(res => {
                const allProducts = res.data;
                const findProduct = allProducts.find(item => item._id == id)
                setProduct(findProduct);
            })
    }, [id, myAxios, user.email])
    console.log(id, product);

    const { productName, image, productQuantity, productLocation, productionCostInt, marginValue, discount, productDescription, _id} = product || {}

    // update product handle
    const { register, handleSubmit } = useForm()
    const onSubmit = async (data) => {
        // console.log(data)
        const productName = data?.productName;
        const productQuantity = data?.productQuantity;
        const productLocation = data?.productLocation;
        const productionCost = data?.productionCost;
        const profitMargin = data?.profitMargin;
        const discount = data?.discount;
        const productDescription = data?.productDescription;

        const imageFile = { image: data.image[0] }
        const res = await myAxios.post(image_hosting_api, imageFile, {
            headers: {
                "content-type": "multipart/form-data",
            }
        })
        if (res.data.success) {
            const product = {
                productName,
                image: res.data.data.display_url,
                productQuantity,
                productLocation,
                productionCost,
                profitMargin,
                discount,
                productDescription,
            }

            const updateRes = await myAxios.put(`/allProducts/${_id}`, product);
            if(updateRes.data.modifiedCount > 0){
                toast.success('This Product Updated Successfully');
            }
            else{
                toast.error('Sorry I think server Down');
            }

        }

    }
    return (
        <div>
            <Helmet>
                <title>
                    MGI | Dashboard | Update Product
                </title>
            </Helmet>
            <Headline headline={'Update Your Product'}></Headline>
            <div className="max-w-screen-lg mx-auto bg-[#7fabfc98] px-5 py-4 rounded-md mb-10">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="grid md:grid-cols-2 gap-3 items-center">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input {...register("productName")} defaultValue={productName} type="text" placeholder="Product Name here" className="input input-bordered w-full" />

                        </div>

                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Product Quantity</span>
                            </label>
                            <input {...register("productQuantity")} defaultValue={productQuantity} type="text" placeholder="Product Quantity" className="input input-bordered w-full" />

                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Product Location</span>
                            </label>
                            <input {...register("productLocation")} defaultValue={productLocation} type="text" placeholder="Product Location" className="input input-bordered w-full" />

                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Production Cost</span>
                            </label>
                            <input {...register("productionCost")} defaultValue={productionCostInt} type="text" placeholder="Production Cost" className="input input-bordered w-full" />

                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Profit Margin <span className="font-bold">%</span></span>
                            </label>
                            <input {...register("profitMargin")} defaultValue={marginValue} type="text" placeholder="Profit Margin %" className="input input-bordered w-full" />

                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Discount <span className="font-bold">%</span></span>
                            </label>
                            <input {...register("discount")} defaultValue={discount} type="text" placeholder="Discount %" className="input input-bordered w-full" />

                        </div>
                        <div className="form-control w-full mb-3">
                            <label className="label">
                                <span className="label-text">Product Description</span>
                            </label>
                            <textarea {...register('productDescription')} defaultValue={productDescription}
                                className="p-4 rounded-md"
                                placeholder="Product Description" id="" cols="30" rows=""></textarea>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Product Image</span>
                            </label>
                            <input  {...register('image')} defaultValue={image}
                                type="file" className="file-input w-full" />
                        </div>
                    </div>

                    <div className="flex justify-center mt-5">
                        <button type="submit" className="bg-[#2c6be0ec] hover:bg-[#245dc7] font-semibold hover:scale-110 duration-600 transition-all py-2 px-2 rounded-lg text-white ">Add Product</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;