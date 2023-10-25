import { useLoaderData } from "react-router-dom";
import img from "../../assets/images/checkout/checkout.png"

const Checkout = () => {

    const service = useLoaderData();

    return (
        <div>
            <div className="relative">
                <img src={img} className="w-full" alt="" />
                    <h3 className="text-5xl font-bold text-white  rounded-xl absolute flex items-center justify-between transform -translate-y-1/2 pl-24 top-1/2 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        Check Out
                    </h3>
                <button className="text-xl font-medium text-white bg-[#FF3811] py-3 px-16 absolute bottom-0 left-[500px]">
                    Home/Checkout
                </button>
            </div>
            <form className="card-body bg-base-200 my-28 p-24 rounded-xl">
                <div className="flex flex-col md:flex-row gap-6 mb-6">
                    <div className="form-control w-1/2">
                        <input type="text" placeholder="First Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-1/2">
                        <input type="text" placeholder="Last Name" className="input input-bordered" required />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-6 mb-6">
                    <div className="form-control w-1/2">
                        <input type="text" placeholder="Your Phone" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-1/2">
                        <input type="email" placeholder="Your Email" className="input input-bordered" required />
                    </div>
                </div>
                <div>
                    <textarea className="input input-bordered w-full h-56 p-6" placeholder="Your Message" name="message" id="" cols="30" rows="10" required></textarea>
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-[#FF3811] hover:bg-[#FF4811] text-white">Order Confirm</button>
                </div>
            </form>
        </div>
    );
};

export default Checkout;