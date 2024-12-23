import { Link } from "react-router-dom";

const Query = ({ query }) => {
  const { name, photo, brand, recommendationCount } = query;
  return (
    <div className="rounded-lg shadow-lg border border-gray-200 overflow-hidden">
      <img
        src={photo}
        alt="Product"
        className="w-[75%] mx-auto"
      />
      <div className="p-4">
        <span className="inline-block bg-teal-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {brand}
        </span>
        <h2 className="text-xl font-bold mt-2">{name}</h2>
        <p className="text-lg mt-2">Recommend_count : {recommendationCount}</p>
        <Link to="/queryDetails"><button className="mt-2 px-4 py-2 rounded-full bg-[#1c1c1ccd] font-semibold text-white">Recommend</button></Link>
      </div>
    </div>
  );
};

export default Query;
