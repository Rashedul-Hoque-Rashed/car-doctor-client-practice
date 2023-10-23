import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Services = () => {


    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("services.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <div className="my-32">
            <div className="text-center">
                <h4 className="text-xl font-bold text-[#FF3811] mb-5">Service</h4>
                <h2 className="text-5xl font-bold text-[#151515] mb-5">Our Service Area</h2>
                <p className="text-[#737373] w-[680px] mx-auto capitalize leading-7 mb-12">the majority have suffered alteration in some form, by injected humour, or randomized words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {
                    services.map(service => <div key={service._id} className="card w-96 bg-base-100 rounded-xl border border-[#E8E8E8]">
                        <figure className="px-6 pt-6">
                            <img src={service.img}  className="rounded-xl w-[334px] h-[208px]" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-2xl font-bold text-[#444]">{service.title}</h2>
                           <div className="flex items-center justify-between">
                           <p className="text-xl font-semibold text-[#FF3811]">Price: ${service.price}</p>
                            <div className="card-actions">
                                <button className="">
                                    <FaArrowRightLong className="w-6 h-6 text-[#FF3811]"/>
                                </button>
                            </div>
                           </div>
                        </div>
                    </div>)
                }
            </div>
            <div className="text-center">
            <button className="btn h-auto btn-outline normal-case text-lg font-semibold px-7 py-4 hover:border-[#FF3811] text-[#FF3811] hover:bg-[#FF4811] hover:text-white" >More Services</button>
            </div>
        </div>
    );
};

export default Services;