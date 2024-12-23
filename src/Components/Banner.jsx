import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";
import banner4 from "../assets/banner4.jpg";
import banner5 from "../assets/banner5.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {  Pagination, Navigation } from "swiper/modules";
import Slide from "./Slide";

const Banner = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      centeredSlides={true}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <Slide image={banner1} button={"Start Review"} text={"Compare Top-rated products and save time and money on your purchases" }></Slide>
      </SwiperSlide>
      <SwiperSlide>
        <Slide image={banner2} button={"Get your Query"} text={"Get recommendation backed by real user experiences and expert advice"}></Slide>
      </SwiperSlide>
      <SwiperSlide>
        <Slide image={banner3} button={"Be a Productive person"} text={"Access handpick recommendations by industry professionals"}></Slide>
      </SwiperSlide>
      <SwiperSlide>
        <Slide image={banner4} button={"Add Query"} text={"Get the most recommended products at unbeatable price"}></Slide>
      </SwiperSlide>
      <SwiperSlide>
        <Slide image={banner5} button={"Start Shopping"} text={"Discover recommendations for every season and occasion"}></Slide>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
