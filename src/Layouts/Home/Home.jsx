import { useContext } from "react";
import About from "../../Components/About";
import Banner from "../../Components/Banner";
import Faq from "../../Components/Faq";
import Offer from "../../Components/Offer";
import RecentQueries from "../../Components/RecentQueries";
import { AuthContext } from "../../Provider/AuthProvider";
import Loading from "../../Pages/Loading/Loading";

const Home = () => {
  const { loading } = useContext(AuthContext);

  if(loading) return <Loading></Loading>
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
