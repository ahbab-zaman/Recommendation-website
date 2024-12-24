import Banner from "../../Components/Banner";
import Faq from "../../Components/Faq";
import Offer from "../../Components/Offer";
import RecentQueries from "../../Components/RecentQueries";

const Home = () => {
    return (
        <div className="py-6">
            <Banner></Banner>
            <RecentQueries></RecentQueries>
            <Offer></Offer>
            <Faq></Faq>
        </div>
    );
};

export default Home;