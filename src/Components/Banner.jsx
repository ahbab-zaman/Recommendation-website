import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner4.png";
import banner3 from "../assets/banner3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Slide from "./Slide";

const Banner = () => {
  return (
    <Swiper
      spaceBetween={30}
      navigation={true}
      autoplay={true}
      speed={1000}
      loop={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination, Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide className="px-16">
        <Slide
          image={banner1}
          button={"Start Review"}
          text={
            "Compare Top-rated products and save time and money on your purchases"
          }
        ></Slide>
      </SwiperSlide>

      <SwiperSlide className="px-16">
        <Slide
          image={banner2}
          button={"Get your Query"}
          text={
            "Get recommendation backed by real user experiences and expert advice"
          }
        ></Slide>
      </SwiperSlide>

      <SwiperSlide className="px-16">
        <Slide
          image={banner3}
          button={"Be a Productive person"}
          text={"Access handpick recommendations by industry professionals"}
        ></Slide>
      </SwiperSlide>

      <style>
        {`
        .swiper-button-next,
        .swiper-button-prev {
          color: white;
          background-color: #4b5563;
          border-radius: 9999px;
          padding: 10px;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.3s ease;
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background-color: #F7F6F9; 
          color:#000;
          border:1px solid black
        }
        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 1rem;
        }
        `}
      </style>
    </Swiper>
  );
};

export default Banner;
