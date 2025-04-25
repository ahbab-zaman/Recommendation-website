import { useContext } from "react";
import Banner from "../../Components/Banner";
import Faq from "../../Components/Faq";
import Offer from "../../Components/Offer";
import RecentQueries from "../../Components/RecentQueries";
import { AuthContext } from "../../Provider/AuthProvider";
import Loading from "../../Pages/Loading/Loading";
import Trial from "../../Components/Trial";

const Home = () => {
  const { loading } = useContext(AuthContext);

  if (loading) return <Loading></Loading>;
  return (
    <div className="pb-6">
      <Banner />
      <RecentQueries />
      <Offer />
      <Trial />
      <Faq />
    </div>
  );
};

export default Home;
