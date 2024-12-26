import React from "react";
import Lottie from "lottie-react";
import Load from "./Animation - 1733653895547.json" ;
const Loading = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <Lottie animationData={Load} loop={true} />
    </div>
  );
};

export default Loading;
