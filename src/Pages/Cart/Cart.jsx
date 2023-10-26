import { useContext, useEffect, useState } from "react";
import img from "../../assets/images/checkout/checkout.png"
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { PiArrowBendUpLeftFill } from 'react-icons/pi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { IoMdCloseCircle } from 'react-icons/io';
import Swal from "sweetalert2";

const Cart = () => {
    const { user } = useContext(AuthContext);
    const [carts, setCarts] = useState([]);
    const url = `http://localhost:5000/checkouts?email=${user.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCarts(data);
            })
    }, [url])
    const handelDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/checkouts/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                        const remaining = carts.filter(cart => cart._id !== id);
                        setCarts(remaining)
                    })

            }
        })
    }
    const handelConfirm = (id) => {
        fetch(`http://localhost:5000/checkouts/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'Confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount > 0){
                    const remaining = carts.filter(cart => cart._id !== id);
                    const update = carts.find(cart => cart._id === id);
                    update.status = 'Confirm'; 
                    const updateCheckout = [update, ...remaining];
                    setCarts(updateCheckout)
                }
            })
    }
    return (
        <div>
            <div className="relative">
                <img src={img} className="w-full" alt="" />
                <div className="rounded-xl w-full absolute flex flex-col gap-2.5 justify-center transform -translate-y-1/2 pl-24 top-1/2 h-full bg-gradient-to-r from-[#151515] ">
                    <h3 className="text-5xl font-bold text-white">
                        Cart Details
                    </h3>
                    <p className="text-base font-medium text-[#FF3811]">Home - Product Details</p>
                </div>
            </div>
            <div className="overflow-x-auto my-24">
                <table className="table">
                    <tbody>
                        {
                            carts.map(cart => <tr key={cart._id}>
                                <th>
                                    <button onClick={() => handelDelete(cart._id)}>
                                        <IoMdCloseCircle className="w-10 h-10 text-[#444444]" />
                                    </button>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle rounded w-24 h-24">
                                                <img src={cart.img} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-semibold text-xl text-[#444]">{cart.service}</div>
                                            <div className="text-sm opacity-50">Color: Green</div>
                                            <div className="text-sm opacity-50">Size: S</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-xl font-semibold text-[#444]">
                                    {"$" + cart.price}
                                </td>
                                <td className="text-xl font-medium text-[#2D2D2D] text-end">{cart.date}</td>
                                <th className="text-end">
                                    {
                                        cart.status === 'Confirm' ? <button className="btn btn-outline text-xl font-semibold text-[#29B170]  rounded-2xl py-2.5 px-5 hover:bg-[#29B170] hover:text-white hover:border-[#29B170] normal-case">Approved</button> : 
                                        <button onClick={() => handelConfirm(cart._id)} className="text-xl font-semibold text-white bg-[#FF3811] rounded-2xl py-2.5 px-5">Pending</button>
                                    }
                                </th>
                            </tr>)
                        }


                    </tbody>
                    {/* foot */}
                    <tfoot>
                        <tr>
                            <th></th>
                            <th className="text-xl text-[#444] flex items-center gap-2"><PiArrowBendUpLeftFill className="w-5 h-5" /> Continue Shopping</th>
                            <th></th>
                            <th></th>
                            <th className="text-xl text-[#444] flex items-center gap-2 justify-end"><RiDeleteBin6Line className="w-5 h-5" /> Clear Shopping Cart</th>
                        </tr>
                    </tfoot>

                </table>
            </div>
        </div>
    );
};

export default Cart;