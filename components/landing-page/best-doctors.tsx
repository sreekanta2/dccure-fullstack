"use client";
import clinic1 from "@/public/images/clinic/clinic-1.jpg";
import clinic2 from "@/public/images/clinic/clinic-2.jpg";
import clinic3 from "@/public/images/clinic/clinic-3.jpg";
import clinic4 from "@/public/images/clinic/clinic-4.jpg";
import clinic5 from "@/public/images/clinic/clinic-5.jpg";
import clinic6 from "@/public/images/clinic/clinic-6.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import {
  Cardiology,
  Dentist,
  Medicine,
  Neurology,
  Orthopedic,
  Urology,
} from "../svg";
import DoctorCard from "./doctor-card";

const items = [
  { src: clinic1, alt: "Slide 1", inner: <Urology />, label: "Urology" },
  { src: clinic2, alt: "Slide 2", inner: <Orthopedic />, label: "Orthopedic" },
  { src: clinic3, alt: "Slide 3", inner: <Cardiology />, label: "Cardiology" },
  { src: clinic4, alt: "Slide 4", inner: <Dentist />, label: "Dentist" },
  { src: clinic5, alt: "Slide 5", inner: <Neurology />, label: "Neurology" },
  { src: clinic6, alt: "Slide 6", inner: <Medicine />, label: "Medicine" },
  { src: clinic6, alt: "Slide 7", inner: <Medicine />, label: "Medicine" },
];

const BestDoctors = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  useEffect(() => {
    const handleResize = () => {
      swiperInstance?.update();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [swiperInstance]);

  return (
    <div className="px-6 lg:px-0 space-y-4 bg-background   my-8 max-w-7xl mx-auto">
      <div className="space-y-1 max-w-lg">
        <h1 className="text-2xl font-medium text-primary">
          Book Our Best Doctor
        </h1>
        <p>Meet our experts & book online.</p>
      </div>
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
        speed={400}
        loop={true}
        modules={[Navigation]}
        grabCursor={true}
        breakpoints={{
          1024: { slidesPerView: 4, spaceBetween: 15 },
          600: { slidesPerView: 2, spaceBetween: 15 },
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
              <DoctorCard />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default BestDoctors;
