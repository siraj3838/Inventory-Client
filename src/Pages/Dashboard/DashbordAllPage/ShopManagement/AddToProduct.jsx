import { useContext } from "react";
import Headline from "../../../../Shared/Headline";
import { AuthContext } from "../../../../Providers/AuthProvider";
import useAxiosPublic from "../../../../Hook/useAxiosPublic";
import { useForm } from "react-hook-form";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddToProduct = () => {
    const { user } = useContext(AuthContext);
    const myAxios = useAxiosPublic();
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const onSubmit = async (data) => {
        console.log(data)

        const imageFile = { image: data.image[0] }
        const res = await myAxios.post(image_hosting_api, imageFile, {
            headers: {
                "content-type": "multipart/form-data",
            }
        })
        if (res.data.success) {

        }
        // console.log(res.data);
    }
    return (
        <div>
            <Headline headline={'Please Added Some Product'}></Headline>
            <div className="max-w-screen-lg mx-auto bg-[#7fabfc98] px-5 py-4 rounded-md mb-10">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="grid md:grid-cols-2 gap-3 items-center">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input {...register("productName", { required: true })} type="text" placeholder="Product Name here" className="input input-bordered w-full" />
                            {errors.productName && <span className="text-red-600">Product Name is required</span>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <select defaultValue={'default'} {...register('category', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value={'default'}>Select a category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Product Quantity</span>
                            </label>
                            <input {...register("productQuantity", { required: true })} type="number" placeholder="Product Quantity" className="input input-bordered w-full" />
                            {errors.productQuantity && <span className="text-red-600">Product Quantity is required</span>}
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Product Location</span>
                            </label>
                            <input {...register("productLocation", { required: true })} type="text" placeholder="Product Location" className="input input-bordered w-full" />
                            {errors.productLocation && <span className="text-red-600">product Location is required</span>}
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Production Cost</span>
                            </label>
                            <input {...register("productionCost", { required: true })} type="number" placeholder="Production Cost" className="input input-bordered w-full" />
                            {errors.productionCost && <span className="text-red-600">Production Cost is required</span>}
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Profit Margin <span className="font-bold">%</span></span>
                            </label>
                            <input {...register("profitMargin", { required: true })} type="number" placeholder="Profit Margin %" className="input input-bordered w-full" />
                            {errors.profitMargin && <span className="text-red-600">How much profit margin do want to take?</span>}
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Discount <span className="font-bold">%</span></span>
                            </label>
                            <input {...register("discount", { required: true })} type="number" placeholder="Discount %" className="input input-bordered w-full" />
                            {errors.discount && <span className="text-red-600">Please said how much Discount provide on this product?</span>}
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Product Image</span>
                            </label>
                            <input  {...register('image', { required: true })}
                                type="file" className="file-input w-full" />
                        </div>
                    </div>
                    <div className="form-control w-full mb-3">
                        <label className="label">
                            <span className="label-text">Product Description</span>
                        </label>
                        <textarea {...register('productDescription', { required: true })}
                            className="p-4 rounded-md"
                            placeholder="Product Description" id="" cols="30" rows=""></textarea>
                        {errors.productDescription && <span className="text-red-600">Please Type Some Description</span>}
                    </div>
                    <div className="flex justify-center">
                        <button type="submit" className="bg-[#2c6be0ec] hover:bg-[#245dc7] font-semibold hover:scale-110 duration-600 transition-all py-2 px-2 rounded-lg text-white ">Add Product</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddToProduct;