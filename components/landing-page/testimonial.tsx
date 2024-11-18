"use client";
import { avatar } from "@/config/user.config";
import clinic1 from "@/public/images/clinic/clinic-1.jpg";
import clinic2 from "@/public/images/clinic/clinic-2.jpg";
import clinic3 from "@/public/images/clinic/clinic-3.jpg";
import clinic4 from "@/public/images/clinic/clinic-4.jpg";
import clinic5 from "@/public/images/clinic/clinic-5.jpg";
import clinic6 from "@/public/images/clinic/clinic-6.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import "swiper/css";
import { Navigation } from "swiper/modules";
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

const Testimonial = () => {
  return (
    <div className="w-full  bg-primary/10  ">
      <div className=" px-6    my-8 max-w-5xl mx-auto p-6  ">
        <div className="flex items-center justify-self-end">
          <button className="swiper-button-prev">
            <ChevronLeft size={30} className="text-primary" />
          </button>
          <button className="swiper-button-next">
            <ChevronRight size={30} className="text-primary" />
          </button>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={15}
          centeredSlides={false}
          speed={1500}
          loop={true}
          modules={[Navigation]}
          grabCursor={true}
          autoplay={{
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
            delay: 0,
          }}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="px-6 flex gap-4 items-center ">
                <div>
                  <Image
                    src={avatar || ""}
                    width={200}
                    height={200}
                    className="  relative overflow-hidden rounded-full"
                    alt="background image"
                  />
                </div>
                <div className="w-full space-y-2">
                  <span className="text-xs text-primary">Testimonial</span>
                  <h1 className="text-2xl font-bold">Whats Our client says</h1>
                  <p className="text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Similique omnis harum excepturi aliquam quas natus facere
                    laboriosam in nam. Autem.
                  </p>
                  <h1 className="flex flex-col ">
                    <span className="font-semibold">Jhon doe</span>
                    <span className="text-xs">New york</span>
                  </h1>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
