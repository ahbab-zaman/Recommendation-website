import { Link } from "react-router-dom";

const Query = ({ query }) => {
  const { name, photo, brand, recommendationCount, _id } = query;
  return (
    <div
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="100"
      data-aos-offset="0"
      className="card shadow-xl"
    >
      <figure>
        <img
          src={photo}
          className="h-[200px] w-3/5 mx-auto object-contain"
          alt="product"
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title">
          <div className="badge badge-secondary">{brand}</div>
        </h2>
        <p className="text-lg font-bold">{name}</p>
        <p className="lg:text-base text-sm font-semibold">
          Customer Recommendation : {recommendationCount}
        </p>
        <div>
          <Link to={`/queryDetails/${_id}`}>
            <button className="lg:px-[12px] px-2 text-sm lg:py-2 py-1 rounded-full bg-neutral font-semibold text-white">
              Recommend
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Query;
