import axios from "axios";
import { useEffect, useState } from "react";
import RecentQueryCard from "./RecentQueryCard";

const RecentQueries = () => {
  const [recentQueries, setRecentQueries] = useState([]);
  useEffect(() => {
    const recentQueries = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/recentQueries`
      );
      setRecentQueries(data);
    };
    recentQueries();
  }, []);
  return (
    <div>
      <div className="p-4 text-center">
        <h4 className="text-3xl font-semibold">Our Recent Queries</h4>
        <p className="font-semibold">
          These are our recent queries reviewed by all customers
        </p>
      </div>
      <div className="w-11/12 mx-auto grid lg:grid-cols-3 gird-col-1 gap-4">{
        recentQueries.map(query => <RecentQueryCard query={query} key={query._id}></RecentQueryCard>)
      }</div>
    </div>
  );
};

export default RecentQueries;
