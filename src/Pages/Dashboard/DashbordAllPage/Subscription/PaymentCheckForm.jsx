
import { useContext } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../../Providers/AuthProvider";
import useAxiosPublic from "../../../../Hook/useAxiosPublic";
import toast from "react-hot-toast";
import useManager from "../../../../Hook/useManager";

const PaymentCheckForm = () => {
    const { price } = useParams();
    const subPrice = parseInt(price)
    const {user} = useContext(AuthContext);
    const myAxios = useAxiosPublic();
    const navigate = useNavigate();
    const [manager] = useManager();
    const [empty, setEmpty] = useState('');
    const [emptyEx, setEmptyEx] = useState('');
    console.log(subPrice);
    const paymentHandle = e => {
        e.preventDefault();
        const form = e.target;
        const cardNumber = form.cardNumber.value;
        const expireDate = form.expireDate.value;
        const email = user?.email;
        const paymentHistory = {cardNumber, expireDate, email, price: subPrice};
        setEmpty('');
        setEmptyEx('');
        if (cardNumber == '') {
            return setEmpty('Please Provide Card Number')
        }
        if (expireDate == '') {
            return setEmptyEx('Please Provide Expire Date')
        }
        myAxios.post('/paymentChecks', paymentHistory)
        .then(res => {
            if(res.data.insertedId){
                toast.success('Payment Successfully')
                navigate('/dashboard/subscription')
            }
        })

    }
    return (
        <div>
            <form onSubmit={paymentHandle} className="px-5 my-10">
                <div className="grid md:grid-cols-3">
                    <input className="col-span-2 outline-none" type="text" name="cardNumber" placeholder="Card Number" />

                    <input className="col-span-1 outline-none" type="date" name="expireDate" placeholder="MM/YY/CVC" />
                </div>
                <p className="text-red-600">{empty ? empty : ''}</p>
                <p className="text-red-600">{emptyEx ? emptyEx : ''}</p>
                <br />
                <button className="bg-[#2c6be0ec] hover:bg-[#245dc7] font-semibold hover:scale-110 duration-600 transition-all py-2 px-2 rounded-md text-white">Pay</button>
            </form>
        </div>
    );
};

export default PaymentCheckForm;