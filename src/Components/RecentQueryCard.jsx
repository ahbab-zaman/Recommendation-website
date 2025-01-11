import { Link } from "react-router-dom";

const RecentQueryCard = ({ query }) => {
  const { name, photo, brand, recommendationCount, _id } = query;
  return (
    <div
      data-aos="fade-down"
      data-aos-offset="120"
      data-aos-duration="1000"
      data-aos-easing="ease-out-cubic"
      data-aos-delay="400"
      className="card shadow-xl"
    >
      <figure>
        <img className="h-[200px] w-3/5 mx-auto" src={photo} alt="product" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <div className="badge badge-secondary">{brand}</div>
        </h2>
        <p className="text-lg font-bold">{name}</p>
        <p className="text-base font-semibold">
          Recommend_count : {recommendationCount}
        </p>
        <div>
          <Link to={`/queryDetails/${_id}`}>
            <button className="px-3 py-[6px] rounded-full bg-neutral font-semibold text-white">
              Recommend
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecentQueryCard;
