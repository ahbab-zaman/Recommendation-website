import About from "../../Components/About";
import Banner from "../../Components/Banner";
import Faq from "../../Components/Faq";
import Offer from "../../Components/Offer";
import RecentQueries from "../../Components/RecentQueries";

const Home = () => {
    return (
        <div className="pb-6">
            <Banner></Banner>
            <About></About>
            <RecentQueries></RecentQueries>
            <Offer></Offer>
            <Faq></Faq>
        </div>
    );
};

export default Home;