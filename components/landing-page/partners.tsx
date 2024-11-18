"use client";

import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Partners1,
  Partners2,
  Partners3,
  Partners4,
  Partners5,
  Partners6,
  Urology,
} from "../svg";
const items = [
  { src: <Partners1 />, alt: "Slide 1", inner: <Urology />, label: "Urology" },
  { src: <Partners2 />, alt: "Slide 1", inner: <Urology />, label: "Urology" },
  { src: <Partners3 />, alt: "Slide 1", inner: <Urology />, label: "Urology" },
  { src: <Partners1 />, alt: "Slide 1", inner: <Urology />, label: "Urology" },

  { src: <Partners4 />, alt: "Slide 1", inner: <Urology />, label: "Urology" },
  { src: <Partners5 />, alt: "Slide 1", inner: <Urology />, label: "Urology" },
  { src: <Partners6 />, alt: "Slide 1", inner: <Urology />, label: "Urology" },
  { src: <Partners4 />, alt: "Slide 1", inner: <Urology />, label: "Urology" },
];

const PartnersPage = () => {
  return (
    <div className="px-6 lg:px-0 space-y-4 my-14 max-w-5xl mx-auto">
      <div className="space-y-1">
        <h1 className="text-2xl font-medium text-primary text-center">
          Our Partners
        </h1>
      </div>

      <Swiper
        slidesPerView={5}
        spaceBetween={15}
        centeredSlides={false}
        speed={1500}
        loop={true}
        modules={[Navigation, Autoplay]}
        grabCursor={true}
        autoplay={{
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
          delay: 0,
        }}
        breakpoints={{
          1024: { slidesPerView: 6, spaceBetween: 15 },
          600: { slidesPerView: 3, spaceBetween: 15 },
          480: { slidesPerView: 2, spaceBetween: 15 },
          0: { slidesPerView: 1, spaceBetween: 15 },
        }}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">{item.src}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PartnersPage;
