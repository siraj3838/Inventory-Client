/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const AllProduct = ({ product, deleteProduct }) => {
    const { productName, image, productQuantity, saleCount, _id } = product || {};

    return (
        <div data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000" className="col-span-1 bg-slate-100 space-y-3 rounded-md">
            <div>
                <img className="md:h-64 w-full rounded-t-md" src={image} alt="" />
            </div>
            <h2 className="text-xl font-bold px-3">{productName}</h2>
            <div className="flex justify-between items-center px-3 text-lg font-semibold">
                <h5>Total Quantity: {productQuantity}</h5>
                <h5>Sale Count:{saleCount}</h5>
            </div>
            <div className="flex justify-between items-center px-3 pb-4 pt-2">
                <Link to={`/dashboard/updateProduct/${_id}`}>
                    <button className="bg-blue-500 border-r-2 border-black text-white font-semibold text-lg py-1 px-2 hover:bg-blue-600 rounded-md">Update</button>
                </Link>
                <button onClick={() => deleteProduct(_id)} className="bg-blue-500 border-r-2 border-black text-white font-semibold text-lg py-1 px-2 hover:bg-blue-600 rounded-md">Delete</button>
            </div>
        </div>
    );
};

export default AllProduct;