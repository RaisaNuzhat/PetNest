import Banner from "../components/Banner";
import CallToAction from "../components/CallToAction";


const Home = () => {
    return (
        <div className="container mx-auto flex justify-center items-center flex-col">
            <Banner/>
            <CallToAction/>
        </div>
    );
};

export default Home;