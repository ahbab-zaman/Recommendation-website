import { Link } from "react-router-dom";

const Query = ({ query }) => {
  const { name, photo, brand, recommendationCount, _id } = query;
  return (
    <div className="card shadow-xl">
      <figure>
        <img src={photo} className="h-[400px] w-full" alt="product" />
      </figure>
      <div className="card-body lg:p-4 p-1">
        <h2 className="card-title">
          <div className="badge badge-secondary">{brand}</div>
        </h2>
        <p className="text-lg font-bold">{name}</p>
        <p className="lg:text-lg text-sm font-semibold">
          Customer Recommendation : {recommendationCount}
        </p>
        <div>
          <Link to={`/queryDetails/${_id}`}>
            <button className="lg:px-4 px-2 lg:py-2 py-1 rounded-full bg-[#1c1c1ccd] font-semibold text-white">
              Recommend
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Query;
