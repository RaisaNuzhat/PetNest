import AboutUs from "../components/AboutUs";
import Banner from "../components/Banner";
import CallToAction from "../components/CallToAction";
import HowYouCanHelp from "../components/HowYouCanHelp";
import SuccessStories from "../components/SuccessStories";


const Home = () => {
    return (
        <div className="container mx-auto flex justify-center items-center flex-col">
            <Banner/>
            <CallToAction/>
            <AboutUs/>
            <SuccessStories/>
            <HowYouCanHelp/>
        </div>
    );
};

export default Home;