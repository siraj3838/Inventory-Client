import { Link } from "react-router-dom";
import Headline from "../../../../Shared/Headline";

const ShopManagement = () => {
    return (
        <div>
            <Headline headline={'Shop Management'}></Headline>
            <div className="flex justify-between max-w-screen-sm mx-auto border-y-2 border-black ">
                <h2 className="p-3">Total 0 Product Added</h2>
                <Link to={'/dashboard/addToProduct'}>
                    <button className="btn bg-blue-500 rounded-none border-r-2 border-black text-white font-semibold">Add a Product</button>
                </Link>
            </div>
        </div>
    );
};

export default ShopManagement;