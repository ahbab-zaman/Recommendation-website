import Banner from "../../Components/Banner";
import RecentQueries from "../../Components/RecentQueries";

const Home = () => {
    return (
        <div className="py-6">
            <Banner></Banner>
            <RecentQueries></RecentQueries>
        </div>
    );
};

export default Home;