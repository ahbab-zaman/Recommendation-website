import axios from "axios";
import { useEffect, useState } from "react";
import Query from "../../Components/Query";

const AllQueries = () => {
  const [queries, setQueries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/allQueries");
        setQueries(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="p-4 text-center">
        <h4 className="text-3xl font-semibold">Explore All Our Queries</h4>
        <p className="font-semibold">
          These are our latest queries made by the users
        </p>
      </div>
      <div className="w-11/12 mx-auto lg:grid grid-cols-3 grid-col-1 py-6">
        {queries.map((query) => (
          <Query key={query._id} query={query}></Query>
        ))}
      </div>
    </div>
  );
};

export default AllQueries;
