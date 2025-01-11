const AboutCard = ({image, title, subTitle}) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg">
      {/* Background Image */}
      <img
        src={image} // Replace with your image URL
        alt="Card Background"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Overlay with Blur and Text */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <p className="text-white text-xl font-semibold">{title}</p>
        <p className="text-white text-lg font-light">{subTitle}</p>
      </div>
    </div>
  );
};

export default AboutCard;
