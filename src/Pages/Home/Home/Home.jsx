import About from "../About/About";
import Banner from "../Banner/Banner";
import Contacts from "../Contacts/Contacts";
import Features from "../Features/Features";
import Products from "../Products/Products";
import Services from "../Services/Services";

const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <Services/>
            <Contacts/>
            <Products/>
            <Features/>
        </div>
    );
};

export default Home;