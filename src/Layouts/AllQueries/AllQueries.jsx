import axios from "axios";
import { useEffect, useState } from "react";
import Query from "../../Components/Query";

const AllQueries = () => {
  const [queries, setQueries] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `${
            import.meta.env.VITE_API_URL
          }/allQueries?search=${search}&sort=${sort}`
        );
        setQueries(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [search, sort]);

  return (
    <div className="w-11/12 mx-auto">
      <div className="p-4 text-center">
        <h4 className="text-3xl font-semibold">Explore All Our Queries</h4>
        <p className="font-semibold">
          These are our latest queries made by the users
        </p>
      </div>

      <div className=" flex lg:flex-row flex-col gap-2 justify-between items-center py-4">
        <div className="flex justify-center p-1 overflow-hidden border rounded-lg  focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
          <input
            className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
            type="text"
            name="search"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            placeholder="Enter Product Name"
            aria-label="Enter Product Name"
          />

          <button className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-neutral rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
            Search
          </button>
        </div>
        {/* sort */}
        <div>
          <button
            onClick={() => setSort(!sort)}
            className="px-4 py-2 rounded-xl bg-neutral text-white font-semibold hover:bg-[#ffffff09] hover:border hover:text-black hover:transition-colors hover:duration-300"
          >
            Sort By Count
          </button>
        </div>
      </div>
      <div className={`grid lg:grid-cols-4 grid-cols-1 py-6 gap-6`}>
        {queries.map((query) => (
          <Query key={query._id} query={query}></Query>
        ))}
      </div>
    </div>
  );
};

export default AllQueries;
