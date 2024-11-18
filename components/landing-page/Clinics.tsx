"use client";
import clinic1 from "@/public/images/clinic/clinic-1.jpg";
import clinic2 from "@/public/images/clinic/clinic-2.jpg";
import clinic3 from "@/public/images/clinic/clinic-3.jpg";
import clinic4 from "@/public/images/clinic/clinic-4.jpg";
import clinic5 from "@/public/images/clinic/clinic-5.jpg";
import clinic6 from "@/public/images/clinic/clinic-6.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Cardiology,
  Dentist,
  Medicine,
  Neurology,
  Orthopedic,
  Urology,
} from "../svg";

const items = [
  { src: clinic1, alt: "Slide 1", inner: <Urology />, label: "Urology" },
  { src: clinic2, alt: "Slide 2", inner: <Orthopedic />, label: "Orthopedic" },
  { src: clinic3, alt: "Slide 3", inner: <Cardiology />, label: "Cardiology" },
  { src: clinic4, alt: "Slide 4", inner: <Dentist />, label: "Dentist" },
  { src: clinic5, alt: "Slide 5", inner: <Neurology />, label: "Neurology" },
  { src: clinic6, alt: "Slide 6", inner: <Medicine />, label: "Medicine" },
  { src: clinic6, alt: "Slide 7", inner: <Medicine />, label: "Medicine" },
];

const ClinicsAndSpecialties = () => {
  return (
    <div className="px-6 lg:px-0 space-y-4 my-8 max-w-7xl mx-auto">
      <div className="space-y-1">
        <h1 className="text-2xl font-medium text-primary">
          Clinic & Specialties
        </h1>
        <p className="max-w-lg">
          Access to expert physicians and surgeons, advanced technologies and
          top-quality surgery facilities right here.
        </p>
      </div>
      <div className="flex items-center justify-self-end">
        <button className="swiper-button-prev">
          <ChevronLeft size={30} className="text-primary" />
        </button>
        <button className="swiper-button-next">
          <ChevronRight size={30} className="text-primary" />
        </button>
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
            <div className="relative w-full h-64">
              {/* Background image */}
              <Image
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover rounded-lg opacity-50"
              />

              {/* Centered icon with background */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-3 bg-white rounded-md shadow-md z-50">
                <div className="w-12 h-12 flex items-center justify-center">
                  {item.inner} {/* Icon or inner content */}
                </div>
              </div>

              {/* Bottom-centered label */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white z-50 text-2xl font-semibold opacity-100">
                {item.label}
              </div>

              {/* Always visible overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-40 rounded-lg"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ClinicsAndSpecialties;
