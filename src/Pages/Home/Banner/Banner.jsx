import img1 from "../../../assets/images/banner/1.jpg"
import img2 from "../../../assets/images/banner/2.jpg"
import img3 from "../../../assets/images/banner/3.jpg"
import img4 from "../../../assets/images/banner/4.jpg"
import img5 from "../../../assets/images/banner/5.jpg"
import img6 from "../../../assets/images/banner/6.jpg"
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <div className="hero h-[600px] rounded-lg" style={{ backgroundImage: `url(${img1})` }}>
                    <div className="hero-overlay bg-opacity-70 bg-black rounded-lg"></div>
                    <div className="hero-content text-center text-neutral-content">
                    </div>
                </div>

                <div className="absolute transform -translate-y-1/2 left-20 top-1/2">
                    <h3 className="text-6xl font-bold text-white w-96 mb-8">Affordable Price For Car Servicing</h3>
                    <p className="text-lg font-normal text-white w-[500px] mb-8">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <button className="bg-[#FF3811] border-2 border-[#FF3811]  text-white pt-3 pb-4 px-6 text-lg font-semibold rounded-lg hover:bg-[#FF4811] mr-5">Discover More</button>
                    <button className="border-2 border-[#FF3811] text-white pt-3 pb-4 px-6 text-lg font-semibold rounded-lg hover:bg-[#FF4811]">Latest Project</button>
                </div>

                <div className="absolute flex gap-5 justify-end transform -translate-y-1/2 left-5 right-12 bottom-0">
                    <a href="#slide6" className="bg-[#FFFFFF33] hover:bg-[#FF3811] border-none rounded-full"><FaArrowLeftLong className="text-white w-6 h-6 m-5" /></a>
                    <a href="#slide2" className="bg-[#FFFFFF33] hover:bg-[#FF3811] border-none rounded-full"><FaArrowRightLong className="text-white w-6 h-6 m-5" /></a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div className="hero h-[600px] rounded-lg" style={{ backgroundImage: `url(${img2})` }}>
                    <div className="hero-overlay bg-opacity-70 bg-black rounded-lg"></div>
                    <div className="hero-content text-center text-neutral-content">
                    </div>
                </div>

                <div className="absolute transform -translate-y-1/2 left-20 top-1/2">
                    <h3 className="text-6xl font-bold text-white w-96 mb-8">Affordable Price For Car Servicing</h3>
                    <p className="text-lg font-normal text-white w-[500px] mb-8">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <button className="bg-[#FF3811] border-2 border-[#FF3811]  text-white pt-3 pb-4 px-6 text-lg font-semibold rounded-lg hover:bg-[#FF4111] mr-5">Discover More</button>
                    <button className="border-2 border-[#FF3811] text-white pt-3 pb-4 px-6 text-lg font-semibold rounded-lg hover:bg-[#FF4111]">Latest Project</button>
                </div>

                <div className="absolute flex gap-5 justify-end transform -translate-y-1/2 left-5 right-12 bottom-0">
                    <a href="#slide1" className="bg-[#FFFFFF33] hover:bg-[#FF3811] border-none rounded-full"><FaArrowLeftLong className="text-white w-6 h-6 m-5" /></a>
                    <a href="#slide3" className="bg-[#FFFFFF33] hover:bg-[#FF3811] border-none rounded-full"><FaArrowRightLong className="text-white w-6 h-6 m-5" /></a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <div className="hero h-[600px] rounded-lg" style={{ backgroundImage: `url(${img3})` }}>
                    <div className="hero-overlay bg-opacity-70 bg-black rounded-lg"></div>
                    <div className="hero-content text-center text-neutral-content">
                    </div>
                </div>

                <div className="absolute transform -translate-y-1/2 left-20 top-1/2">
                    <h3 className="text-6xl font-bold text-white w-96 mb-8">Affordable Price For Car Servicing</h3>
                    <p className="text-lg font-normal text-white w-[500px] mb-8">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <button className="bg-[#FF3811] border-2 border-[#FF3811]  text-white pt-3 pb-4 px-6 text-lg font-semibold rounded-lg hover:bg-[#FF4111] mr-5">Discover More</button>
                    <button className="border-2 border-[#FF3811] text-white pt-3 pb-4 px-6 text-lg font-semibold rounded-lg hover:bg-[#FF4111]">Latest Project</button>
                </div>

                <div className="absolute flex gap-5 justify-end transform -translate-y-1/2 left-5 right-12 bottom-0">
                    <a href="#slide2" className="bg-[#FFFFFF33] hover:bg-[#FF3811] border-none rounded-full"><FaArrowLeftLong className="text-white w-6 h-6 m-5" /></a>
                    <a href="#slide4" className="bg-[#FFFFFF33] hover:bg-[#FF3811] border-none rounded-full"><FaArrowRightLong className="text-white w-6 h-6 m-5" /></a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <div className="hero h-[600px] rounded-lg" style={{ backgroundImage: `url(${img4})` }}>
                    <div className="hero-overlay bg-opacity-70 bg-black rounded-lg"></div>
                    <div className="hero-content text-center text-neutral-content">
                    </div>
                </div>

                <div className="absolute transform -translate-y-1/2 left-20 top-1/2">
                    <h3 className="text-6xl font-bold text-white w-96 mb-8">Affordable Price For Car Servicing</h3>
                    <p className="text-lg font-normal text-white w-[500px] mb-8">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <button className="bg-[#FF3811] border-2 border-[#FF3811]  text-white pt-3 pb-4 px-6 text-lg font-semibold rounded-lg hover:bg-[#FF4111] mr-5">Discover More</button>
                    <button className="border-2 border-[#FF3811] text-white pt-3 pb-4 px-6 text-lg font-semibold rounded-lg hover:bg-[#FF4111]">Latest Project</button>
                </div>

                <div className="absolute flex gap-5 justify-end transform -translate-y-1/2 left-5 right-12 bottom-0">
                    <a href="#slide3" className="bg-[#FFFFFF33] hover:bg-[#FF3811] border-none rounded-full"><FaArrowLeftLong className="text-white w-6 h-6 m-5" /></a>
                    <a href="#slide5" className="bg-[#FFFFFF33] hover:bg-[#FF3811] border-none rounded-full"><FaArrowRightLong className="text-white w-6 h-6 m-5" /></a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <div className="hero h-[600px] rounded-lg" style={{ backgroundImage: `url(${img5})` }}>
                    <div className="hero-overlay bg-opacity-70 bg-black rounded-lg"></div>
                    <div className="hero-content text-center text-neutral-content">
                    </div>
                </div>

                <div className="absolute transform -translate-y-1/2 left-20 top-1/2">
                    <h3 className="text-6xl font-bold text-white w-96 mb-8">Affordable Price For Car Servicing</h3>
                    <p className="text-lg font-normal text-white w-[500px] mb-8">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <button className="bg-[#FF3811] border-2 border-[#FF3811]  text-white pt-3 pb-4 px-6 text-lg font-semibold rounded-lg hover:bg-[#FF4111] mr-5">Discover More</button>
                    <button className="border-2 border-[#FF3811] text-white pt-3 pb-4 px-6 text-lg font-semibold rounded-lg hover:bg-[#FF4111]">Latest Project</button>
                </div>

                <div className="absolute flex gap-5 justify-end transform -translate-y-1/2 left-5 right-12 bottom-0">
                    <a href="#slide4" className="bg-[#FFFFFF33] hover:bg-[#FF3811] border-none rounded-full"><FaArrowLeftLong className="text-white w-6 h-6 m-5" /></a>
                    <a href="#slide6" className="bg-[#FFFFFF33] hover:bg-[#FF3811] border-none rounded-full"><FaArrowRightLong className="text-white w-6 h-6 m-5" /></a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">

                <div className="hero h-[600px] rounded-lg" style={{ backgroundImage: `url(${img6})` }}>
                    <div className="hero-overlay bg-opacity-70 bg-black rounded-lg"></div>
                    <div className="hero-content text-center text-neutral-content">
                    </div>
                </div>

                <div className="absolute transform -translate-y-1/2 left-20 top-1/2">
                    <h3 className="text-6xl font-bold text-white w-96 mb-8">Affordable Price For Car Servicing</h3>
                    <p className="text-lg font-normal text-white w-[500px] mb-8">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <button className="bg-[#FF3811] border-2 border-[#FF3811]  text-white pt-3 pb-4 px-6 text-lg font-semibold rounded-lg hover:bg-[#FF4111] mr-5">Discover More</button>
                    <button className="border-2 border-[#FF3811] text-white pt-3 pb-4 px-6 text-lg font-semibold rounded-lg hover:bg-[#FF4111]">Latest Project</button>
                </div>

                <div className="absolute flex gap-5 justify-end transform -translate-y-1/2 left-5 right-12 bottom-0">
                    <a href="#slide5" className="bg-[#FFFFFF33] hover:bg-[#FF3811] border-none rounded-full"><FaArrowLeftLong className="text-white w-6 h-6 m-5" /></a>
                    <a href="#slide1" className="bg-[#FFFFFF33] hover:bg-[#FF3811] border-none rounded-full"><FaArrowRightLong className="text-white w-6 h-6 m-5" /></a>
                </div>
            </div>
        </div>
    );
};

export default Banner;