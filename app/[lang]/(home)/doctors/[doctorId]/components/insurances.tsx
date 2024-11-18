"use client";
import {
  Partners1,
  Partners2,
  Partners3,
  Partners4,
  Partners5,
  Partners6,
  Urology,
} from "@/components/svg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";

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

const Insurances = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  useEffect(() => {
    const handleResize = () => {
      swiperInstance?.update();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [swiperInstance]);

  return (
    <div
      className="px-6 lg:px-0 space-y-2 bg-background     max-w-7xl mx-auto"
      id="insurances"
    >
      <h1 className="text-lg font-medium  ">Insurance Accepted (6)</h1>

      <div className="flex justify-self-end">
        <button onClick={() => swiperInstance?.slidePrev()}>
          <ChevronLeft size={30} className="text-primary" />
        </button>
        <button onClick={() => swiperInstance?.slideNext()}>
          <ChevronRight size={30} className="text-primary" />
        </button>
      </div>

      <Swiper
        slidesPerView="auto"
        spaceBetween={15}
        centeredSlides={false}
        modules={[Navigation]}
        grabCursor={true}
        breakpoints={{
          1024: { slidesPerView: 5, spaceBetween: 15 },
          900: { slidesPerView: 4, spaceBetween: 15 },
          720: { slidesPerView: 3, spaceBetween: 15 },
          450: { slidesPerView: 2, spaceBetween: 15 },
          0: { slidesPerView: 1, spaceBetween: 15 },
        }}
        onSwiper={(swiper) => {
          if (!swiperInstance) {
            setSwiperInstance(swiper);
          }
        }}
      >
        <div className="">
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full border rounded-md flex-shrink-0 max-w-full py-4  px-6 flex justify-center bg-card">
                {item.src}
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Insurances;
