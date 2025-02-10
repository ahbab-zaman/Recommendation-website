import overview from "../../assets/overview.jpg";
import AboutCard from "../../Components/AboutCard";
import card1 from "../../assets/card1.jpg";
import card2 from "../../assets/card2.jpg";
import card3 from "../../assets/card3.jpg";
import card4 from "../../assets/card4.jpg";
import card5 from "../../assets/card5.jpg";
import card6 from "../../assets/card6.jpg";
import Loading from "../../Pages/Loading/Loading";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
const AboutUs = () => {
  const { loading } = useContext(AuthContext);

  if (loading) return <Loading></Loading>;
  return (
    <div>
      <div className="bg-aboutBanner bg-cover h-[250px] bg-no-repeat flex justify-start items-center">
        <h3 className="text-6xl font-bold px-4 text-white">ABOUT US</h3>
      </div>

      <div className="flex lg:flex-row flex-col gap-5 py-8 w-11/12 mx-auto">
        <div className="lg:w-1/2 w-11/12 mx-auto space-y-4">
          <h3 className="text-4xl font-semibold">OVERVIEW</h3>
          <p className="text-xl font-semibold">
            Recommendao is the leading provider of translation and educational
            services delivering results since 1999.
          </p>
          <h4 className="text-xl font-light">
            With a core group of more than 700 professional linguists and tutors
            operating from six continents, we serve the needs of our clients
            worldwide. Whatever your language needs are, we are here to help.
          </h4>
        </div>
        <div className="lg:w-1/2 w-11/12 mx-auto">
          <img src={overview} alt="" />
        </div>
      </div>

      <div className=" w-11/12 mx-auto">
        <h3 className="text-center text-4xl font-semibold">WHO WE ARE</h3>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 py-6">
          <AboutCard
            image={card1}
            title="Luna Khan"
            subTitle="Chief Executive Officer"
          ></AboutCard>
          <AboutCard
            image={card2}
            title="Brayn Payen"
            subTitle="Chief Executive Officer"
          ></AboutCard>
          <AboutCard
            image={card3}
            title="Ahbab Zaman"
            subTitle="Managing Director"
          ></AboutCard>
          <AboutCard
            image={card4}
            title="Gorgiana Mean"
            subTitle="Senior Instructor"
          ></AboutCard>
          <AboutCard
            image={card5}
            title="Hasan Ali"
            subTitle="Assistant Instructor"
          ></AboutCard>
          <AboutCard
            image={card6}
            title="Muhib Ullah"
            subTitle="Operational Officer"
          ></AboutCard>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
