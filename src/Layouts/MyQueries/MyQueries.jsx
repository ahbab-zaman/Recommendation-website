import { useContext, useEffect, useState } from "react";
import Slide from "../../Components/Slide";
import bannerImg from "../../assets/banner.jpg";
import axios from "axios";
import { AuthContext } from "../../Provider/AuthProvider";
import MyQueryCard from "../../Components/MyQueryCard";
const MyQueries = () => {
  const [queries, setQueries] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    const myQueries = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/allQuery/${user?.email}`
        );
        setQueries(data);
      } catch (error) {
        console.log(error);
      }
    };
    myQueries();
  }, [user]);
  return (
    <div className="space-y-2">
      <div>
        <Slide
          image={bannerImg}
          text={"Submit Your Query and let the community Recommend!"}
          button={"Add Queries"}
        ></Slide>
      </div>

      <div className="w-3/5 text-center mx-auto py-6">
        <h2 className="text-4xl font-semibold">Explore All My Queries</h2>
        <p>
          Don’t hesitate to ask anything! Add your query here and explore a
          world of insights, ideas, and personalized recommendations from
          experts and peers alike."
        </p>
      </div>

      <div className="w-11/12 mx-auto grid lg:grid-cols-3 grid-col-1 py-6 gap-6">{
            queries.map(query => <MyQueryCard query={query} key={query._id}></MyQueryCard>)
        }</div>
    </div>
  );
};

export default MyQueries;
