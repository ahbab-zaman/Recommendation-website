const Trial = () => {
  return (
    <div className="lg:p-24 p-10 trial text-white">
      <div className="space-y-4">
        <h2 className="lg:text-4xl text-2xl font-bold text-center">
         Try the World’s Best Recommender Engine
        </h2>
        <h4 className="lg:text-4xl text-2xl font-bold text-center">Free for 30 Days</h4>
        <p className="text-[#b5e7e2] text-center">
          Increased Conversion Rate · Improved User Experience · Higher Profits
          · Increased Loyalty
        </p>
        <div className="flex justify-center items-center gap-3">
          <button className="bg-white px-4 py-2 rounded-full text-[#35b091] font-semibold">
            Start Free
          </button>
          <button className="bg-[#24b8ad] border-[1px] px-4 py-2 rounded-full text-[#fff] font-semibold">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Trial;
