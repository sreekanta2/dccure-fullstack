"use client";

import { addDays, format, isSameDay } from "date-fns";
import { useEffect, useState } from "react";

import { themes } from "@/config/thems";
import { useThemeStore } from "@/store";
import clsx from "clsx";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTheme } from "next-themes";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";

// Define the prop types
interface CalendarSliderProps {
  onDateSelect?: (date: Date) => void;
  events?: string[]; // Array of dates in string format
}

const CalendarSlider: React.FC<CalendarSliderProps> = ({
  onDateSelect,
  events = [],
}) => {
  const { theme: config } = useThemeStore();
  const { theme: mode } = useTheme();
  const theme = themes.find((theme) => theme.name === config);

  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const [dates, setDates] = useState<Date[]>([]);
  const [todayIndex, setTodayIndex] = useState<number>(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  useEffect(() => {
    const today = new Date();
    const startDate = new Date(
      today.getFullYear(),
      today.getMonth() - 2,
      today.getDate()
    ); // Two months before
    const endDate = new Date(
      today.getFullYear(),
      today.getMonth() + 2,
      today.getDate()
    ); // Two months after
    const tempDates: Date[] = [];
    let currentDate = startDate;

    while (currentDate <= endDate) {
      tempDates.push(new Date(currentDate));
      currentDate = addDays(currentDate, 1);
    }

    setDates(tempDates);

    // Find today's index
    const index = tempDates.findIndex((date) => isSameDay(date, today));
    setTodayIndex(index);
  }, []);

  useEffect(() => {
    if (swiperInstance && todayIndex !== null) {
      swiperInstance.slideTo(todayIndex, 0);
    }
  }, [swiperInstance, todayIndex]);

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    if (onDateSelect) {
      onDateSelect(date);
    }
  };

  const hasEvent = (date: Date) =>
    events.some((eventDate) => isSameDay(date, new Date(eventDate)));
  useEffect(() => {
    const handleResize = () => {
      swiperInstance?.update();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [swiperInstance]);
  return (
    <div className="calendar-slider  ">
      <div className="flex justify-between  border-b mb-4">
        <h1>Appointments</h1>
        <div className="flex items-center justify-between mb-4">
          <button onClick={() => swiperInstance?.slidePrev()}>
            <ChevronLeft />
          </button>
          <button onClick={() => swiperInstance?.slideNext()}>
            <ChevronRight />
          </button>
        </div>
      </div>
      <Swiper
        modules={[Navigation]}
        slidesPerView={4}
        spaceBetween={2}
        centeredSlides
        breakpoints={{
          1024: { slidesPerView: 4, spaceBetween: 2 },
          600: { slidesPerView: 3, spaceBetween: 2 },
          480: { slidesPerView: 3, spaceBetween: 2 },
        }}
        onSwiper={(swiper) => {
          if (!swiperInstance) {
            setSwiperInstance(swiper);
          }
        }}
      >
        {dates.map((date, index) => (
          <SwiperSlide key={index}>
            <button
              onClick={() => handleDateClick(date)}
              aria-label={`Select date ${format(date, "dd MMM yyyy")}`}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleDateClick(date);
                }
              }}
              className={clsx(
                "w-14 h-14 relative justify-center rounded-lg flex flex-col items-center transition-colors duration-300",
                isSameDay(date, selectedDate)
                  ? `bg-[hsl(${
                      theme?.cssVars[mode === "dark" ? "dark" : "light"].primary
                    })] bg-primary text-primary-foreground`
                  : ` border text-[hsl(${
                      theme?.cssVars[mode === "dark" ? "dark" : "light"]
                        .chartLabel
                    })] hover:bg-gray-200 dark:hover:bg-gray-700`
              )}
            >
              <span className="text-xs tracking-wide   ">
                {format(date, "dd MMM EEE ")}
              </span>

              {hasEvent(date) && (
                <span
                  className="absolute top-[2px] mb-1 right-1 h-2 w-2 rounded-full bg-success"
                  title="Event"
                ></span>
              )}
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CalendarSlider;
