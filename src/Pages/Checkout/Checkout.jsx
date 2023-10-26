import { useLoaderData } from "react-router-dom";
import img from "../../assets/images/checkout/checkout.png"
import { useContext } from "react";
import { AuthContext } from './../../Provider/AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {

    const service = useLoaderData();
    const { user } = useContext(AuthContext);


    const handelCheckout = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const phone = form.phone.value;
        const email = user?.email;
        const message = form.message.value;
        const price = service.price;
        const img = service.img;

        const checkout = {
            customerName: name,
            service: service.title,
            service_id: service._id,
            img,
            email,
            phone,
            date,
            price,
            message
        }
        console.log(checkout)
        fetch('http://localhost:5000/checkouts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(checkout)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast('Check Out Successfully')
                }
            })
    }



    return (
        <div>
            <div className="relative">
                <img src={img} className="w-full" alt="" />
                <h3 className="text-5xl w-full font-bold text-white  rounded-xl absolute flex items-center justify-between transform -translate-y-1/2 pl-24 top-1/2 h-full bg-gradient-to-r from-[#151515]">
                    Check Out
                </h3>
                <button className="text-xl font-medium text-white bg-[#FF3811] py-3 px-16 absolute bottom-0 left-[500px]">
                    Home/Checkout
                </button>
            </div>
            <form onSubmit={handelCheckout} className="card-body bg-base-200 my-28 p-24 rounded-xl">
                <div className="flex flex-col md:flex-row gap-6 mb-6">
                    <div className="form-control w-1/2">
                        <input type="text" name="name" placeholder="Name" defaultValue={user?.displayName} className="input input-bordered" required />
                    </div>
                    <div className="form-control w-1/2">
                        <input type="date" name="date" placeholder="" className="input input-bordered" required />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-6 mb-6">
                    <div className="form-control w-1/2">
                        <input type="text" name="phone" placeholder="Your Phone" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-1/2">
                        <input type="email" name="email" placeholder="Your Email" defaultValue={user?.email} className="input input-bordered" readOnly />
                    </div>
                </div>
                <div>
                    <textarea className="input input-bordered w-full h-56 p-6" placeholder="Your Message" name="message" id="" cols="30" rows="10" required></textarea>
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-[#FF3811] hover:bg-[#FF4811] text-white">Order Confirm</button>
                </div>
            </form>
            <ToastContainer/>
        </div>
    );
};

export default Checkout;