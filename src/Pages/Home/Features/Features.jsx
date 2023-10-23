import { AiOutlineTeam } from 'react-icons/ai';
import { BiStopwatch } from 'react-icons/bi';
import { MdSupportAgent } from 'react-icons/md';
import { BsShieldFillCheck, BsTools } from 'react-icons/bs';
import { TbTruckDelivery } from 'react-icons/tb';

const Features = () => {
    return (
        <div className="my-32">
            <div className="text-center">
                <h4 className="text-xl font-bold text-[#FF3811] mb-5">Core Features</h4>
                <h2 className="text-5xl font-bold text-[#151515] mb-5">Why Choose Us</h2>
                <p className="text-[#737373] w-[680px] mx-auto capitalize leading-7 mb-12">the majority have suffered alteration in some form, by injected humour, or randomized words which do not look even slightly believable.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                <div className="text-center p-7 border border-[#E8E8E8] rounded-xl text-[#444] hover:bg-[#FF3811] hover:text-white">
                    <AiOutlineTeam className='w-14 h-14 mx-auto'/>
                    <h4 className='text-lg font-bold mt-5'>Expert Team</h4>
                </div>
                <div className="text-center p-7 border border-[#E8E8E8] rounded-xl text-[#444] hover:bg-[#FF3811] hover:text-white">
                    <BiStopwatch className='w-14 h-14 mx-auto'/>
                    <h4 className='text-lg font-bold mt-5'>Timely Delivery</h4>
                </div>
                <div className="text-center p-7 border border-[#E8E8E8] rounded-xl text-[#444] hover:bg-[#FF3811] hover:text-white">
                    <MdSupportAgent className='w-14 h-14 mx-auto'/>
                    <h4 className='text-lg font-bold mt-5'>24/7 Support</h4>
                </div>
                <div className="text-center p-7 border border-[#E8E8E8] rounded-xl text-[#444] hover:bg-[#FF3811] hover:text-white">
                    <BsTools className='w-14 h-14 mx-auto'/>
                    <h4 className='text-lg font-bold mt-5'>Best Equipment</h4>
                </div>
                <div className="text-center p-7 border border-[#E8E8E8] rounded-xl text-[#444] hover:bg-[#FF3811] hover:text-white">
                    <BsShieldFillCheck className='w-14 h-14 mx-auto'/>
                    <h4 className='text-lg font-bold mt-5'>100% Guaranty</h4>
                </div>
                <div className="text-center p-7 border border-[#E8E8E8] rounded-xl text-[#444] hover:bg-[#FF3811] hover:text-white">
                    <TbTruckDelivery className='w-14 h-14 mx-auto'/>
                    <h4 className='text-lg font-bold mt-5'>Timely Delivery</h4>
                </div>

            </div>
        </div>
    );
};

export default Features;