import { useContext } from "react";
import Headline from "../../../../Shared/Headline";
import Cart from "./Cart";
import { AuthContext } from "../../../../Providers/AuthProvider";
import toast from "react-hot-toast";
import useCart from "../../../../Hook/useCart";
import useAxiosPublic from "../../../../Hook/useAxiosPublic";
import { Helmet } from "react-helmet-async";


const CheckOutCart = () => {
  const { user } = useContext(AuthContext);
  const myAxios = useAxiosPublic();

  const [cart, refetch] = useCart()
  const salesCount = cart.reduce((pre, cur) => pre + cur.productQuantity, 0)
  const totalInvest = cart.reduce((pre, cur) => pre + cur.productionCost, 0)
  const totalProfit = cart.reduce((pre, cur) => pre + cur.profitMargin, 0)
  const totalSellingPrice = cart.reduce((pre, cur) => pre + cur.sellingPrice, 0)

  const totalPrice = cart.reduce((pre, cur) => pre + cur.totalPrice, 0)

  const getPaidHandle = async (cart) => {
    const currentDate = new Date();
    const dateAndTime = currentDate.toLocaleString();
    const [date] = dateAndTime.split(', ');
    const payment = { salesCount, cartIds: cart.map(item => item._id), totalInvest, totalProfit, date, productName: cart.map(item => item.productName), email: user?.email, totalSellingPrice }
    console.log(payment);
    const res = await myAxios.post('/pendingPaid', payment)
    refetch();
    console.log(res.data);
    if (res.data.deletedCount > 0) {
      toast.success('Thank You Paid Successfully')
    }

  }
  const noProduct = () => {
    toast.custom((t) => (
      <div
        className={`${t.visible ? 'animate-enter' : 'animate-leave'
          } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <img
                className="h-10 w-10 rounded-full"
                src="https://i.ibb.co/YTW3zdt/out-1.jpg"
                alt=""
              />
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">
                Admin
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Please Check-Out Some Product
              </p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-200">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    ))
  }
  

  return (
    <div>
      <Helmet>
        <title>MGI | Manager | Check Out</title>
      </Helmet>
      <Headline headline={'All Check Out Product'}></Headline>
      <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex justify-between items-center px-20">
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-semibold">Total Product Quantity: {cart?.length ? cart?.length : 'Please Collect Some Product'}</h3>
          <h3 className="text-2xl font-semibold">Now You Pay: {totalPrice} $</h3>
        </div>
        {cart.length == 0 ? <button onClick={noProduct} className="bg-blue-500 border-r-2 border-black text-white font-semibold text-sm lg:text-lg py-1 px-2 lg:py-3 lg:px-4 hover:bg-blue-600 rounded-md">Get Paid</button>
          :
          <button onClick={() => getPaidHandle(cart)} className="bg-blue-500 border-r-2 border-black text-white font-semibold text-sm lg:text-lg py-1 px-2 lg:py-3 lg:px-4 hover:bg-blue-600 rounded-md">Get Paid</button>}
      </div>
      <div>
        {
          cart.map(product => <Cart key={product._id} product={product}></Cart>)
        }
      </div>
    </div>
  );
};

export default CheckOutCart;