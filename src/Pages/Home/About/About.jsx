import person from "../../../assets/images/about_us/person.jpg"
import parts from "../../../assets/images/about_us/parts.jpg"

const About = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col gap-32 lg:flex-row px-0 pt-32">
                <div className="w-1/2 relative mb-12">
                <img src={person} className="rounded-lg w-[460px] h-[473px]" />
                <img src={parts} className="rounded-lg absolute left-52 top-52 border-8 border-white w-[327px] h-[332px]" />
                </div>
                <div className="w1/2">
                    <h4 className="text-xl font-bold text-[#FF3811] mb-5">About Us</h4>
                    <h1 className="text-5xl font-bold text-[#151515] mb-8 w-[380px]">We are qualified & of experience in this field</h1>
                    <p className="text-[#737373] w-[490px] mb-5 capitalize leading-7">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which do not look even slightly believable.</p>
                    <p className="text-[#737373] w-[490px] mb-5 capitalize leading-7">the majority have suffered alteration in some form, by injected humour, or randomized words which do not look even slightly believable. </p>
                    <button className="rounded-lg bg-[#FF3811] text-white text-lg font-semibold px-6 py-4 hover:bg-[#FF4811]">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;