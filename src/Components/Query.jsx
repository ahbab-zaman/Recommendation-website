import { Link } from "react-router-dom";

const Query = ({ query }) => {
  const { name, photo, brand, recommendationCount, _id } = query;
  return (
    <div
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="100"
      data-aos-offset="0"
      className="card shadow-xl border-[#62D0B4] border-[1px]"
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
          <div className="bg-[#62D0B4] text-[#fff] px-3 py-[2px] text-sm rounded-full">
            {brand}
          </div>
        </h2>
        <p className="text-lg font-bold">{name}</p>
        <div className="flex items-center font-semibold tracking-wide space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 fill-current mt-[4px]"
            viewBox="0 0 20 20"
          >
            <path d="M18 10c0 1.657-1.79 3-4 3H7l-4 4V6c0-1.657 1.79-3 4-3h7c2.21 0 4 1.343 4 3v4z" />
          </svg>
          <span>{recommendationCount}</span>
        </div>
        <div>
          <Link to={`/queryDetails/${_id}`}>
            <button className="py-2 px-4 rounded-xl text-[#62D0B4] font-bold bg-[#EBF9F5] border-[#62D0B4] border-[1px]">
              Recommend
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Query;
