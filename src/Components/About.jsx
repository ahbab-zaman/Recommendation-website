import { Link } from "react-router-dom";
import about from "../assets/about.jpg";
const About = () => {
  return (
    <div className="w-11/12 mx-auto flex lg:flex-row flex-col gap-5 py-8">
      <div className="lg:w-1/2 w-11/12 mx-auto">
        <img src={about} alt="" />
      </div>
      <div className="lg:w-1/2 w-11/12 mx-auto space-y-6">
        <h2 className="text-3xl font-semibold">A FEW WORD ABOUT US</h2>
        <p className="text-xl font-light">
          Recommendo is a global product purchasing related website. The main
          purpose is to define the review and people's recommendation.
        </p>
        <p className="text-xl font-light">
          With a core group of more than 700 professional linguists and tutors
          operating from six continents, we serve the needs of our clients
          worldwide. Whatever your language needs are, we are here to help.
        </p>
        <div>
          <Link to="/about">
            <button className="px-4 py-2 bg-neutral text-white font-semibold rounded-md">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
