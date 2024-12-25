import { Link } from "react-router-dom";

const Query = ({ query }) => {
  const { name, photo, brand, recommendationCount, _id } = query;
  return (
    <div className="card shadow-xl">
      <figure>
        <img src={photo} className="h-[400px] w-full" alt="product" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <div className="badge badge-secondary">{brand}</div>
        </h2>
        <p className="text-lg font-bold">{name}</p>
        <p className="text-lg font-semibold">
          Customer Recommendation : {recommendationCount}
        </p>
        <div>
          <Link to={`/queryDetails/${_id}`}>
            <button className="px-4 py-2 rounded-full bg-[#1c1c1ccd] font-semibold text-white">
              Recommend
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Query;
