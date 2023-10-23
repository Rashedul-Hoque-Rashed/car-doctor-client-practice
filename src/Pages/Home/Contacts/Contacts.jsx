import { SlCalender } from 'react-icons/sl';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { FaMapLocationDot } from 'react-icons/fa6';

const Contacts = () => {
    return (
        <div className="mb-32 rounded-xl bg-[#151515] py-24 px-20 flex flex-col md:flex-row justify-between">
            <div className="flex gap-5 items-center">
                <SlCalender className='w-10 h-10 text-[#FF3811]' />
                <div>
                    <p className='text-base font-medium text-white mb-2.5'>We are open monday-friday</p>
                    <h4 className='text-2xl font-bold text-white'>7:00 am - 9:00 pm</h4>
                </div>
            </div>
            <div className="flex gap-5 items-center">
                <BiSolidPhoneCall className='w-10 h-10 text-[#FF3811]' />
                <div>
                    <p className='text-base font-medium text-white mb-2.5'>Have a question?</p>
                    <h4 className='text-2xl font-bold text-white'>+2546 251 2658</h4>
                </div>
            </div>
            <div className="flex gap-5 items-center">
                <FaMapLocationDot className='w-10 h-10 text-[#FF3811]' />
                <div>
                    <p className='text-base font-medium text-white mb-2.5'>Need a repair? our address</p>
                    <h4 className='text-2xl font-bold text-white'>Liza Street, New York</h4>
                </div>
            </div>

        </div>
    );
};

export default Contacts;