import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "./styles.css";
import { EffectCards, Autoplay, Pagination, Navigation } from "swiper";

export default function ResultsSwipers() {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      pagination={{ clickable: true }}
      navigation={true}
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards, Autoplay, Pagination, Navigation]}
      className="mySwiper"
      autoplay={{ delay: 2500, disableOnInteraction: false }}
    >
      <SwiperSlide></SwiperSlide>
      <SwiperSlide></SwiperSlide>
      <SwiperSlide></SwiperSlide>
      <SwiperSlide></SwiperSlide>
    </Swiper>
  );
}
