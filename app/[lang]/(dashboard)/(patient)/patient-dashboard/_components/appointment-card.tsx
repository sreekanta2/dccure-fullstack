import ImageComponent from "@/components/ImageComponent";
import { avatar } from "@/config/user.config";
import { CalendarCheck, Clock, MessageCircle, Video } from "lucide-react";
import Link from "next/link";

export default function AppointmentCard() {
  return (
    <div className=" w-full   border   p-2 rounded-lg  space-y-2">
      <div className="flex justify-between ">
        <div className="flex gap-3 items-start">
          <div className="w-10 h-10 rounded-md overflow-hidden">
            <ImageComponent src={avatar} alt="profile" />
          </div>
          <Link href={`#`} className="flex flex-col items-start">
            <h1 className="text-sm font-semibold">Jhon Doe</h1>
            <p className="text-gray-500">1234567890</p>
          </Link>
        </div>
        <Video
          className="border dark:border dark:border-gray-700 p-2 rounded-full shadow-lg hover:bg-primary hover:text-white cursor-pointer"
          size={40}
        />
      </div>

      <div className="border rounded-xl bg-primary/10 mt-2 p-4">
        <div className="flex gap-x-2 text-sm">
          <Clock size={15} />
          <span className=" -mt-1">02:00 PM - 03:00 PM</span>
        </div>
      </div>
      <div className=" grid md:grid-cols-2  gap-2  text-primary-foreground   ">
        <button className="  bg-primary/10  text-default-500     flex  gap-2 justify-center items-center h-10 rounded-md ">
          <MessageCircle
            className="   rounded-full  cursor-pointer"
            size={20}
          />
          <span className="text-md font-semibold  "> Charts</span>
        </button>
        <button className="ring-1 bg-primary hover:bg-primary flex justify-center items-center h-10 rounded-md gap-2">
          <CalendarCheck size={20} />
          <span className="text-md font-semibold "> Attend</span>
        </button>
        <button></button>
      </div>
    </div>
  );
}
