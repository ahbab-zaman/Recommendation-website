import banner from "../assets/banner-1.svg";
const Banner = () => {
  return (
    <>
      <section className="flex justify-between">
        <div className="w-1/2">
        
        </div>
        <div className="w-1/2">
          <figure>
            <img src={banner} alt="" />
          </figure>
        </div>
      </section>
    </>
  );
};

export default Banner;
