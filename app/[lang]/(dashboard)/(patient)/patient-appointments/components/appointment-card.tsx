import IconWrapper from "@/components/IconWraper";
import avatar from "@/public/images/avatar/avatar-1.jpg";
import { Clock, Eye, MessageCircle, Video, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AppointmentCard() {
  return (
    <div
      className="lg:max-w-80 p-4 rounded-lg dark:bg-gray-800   dark:border"
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
      }}
    >
      <div className="flex justify-between">
        <div className="flex gap-3 items-start">
          <div className="w-12 h-12 rounded-sm overflow-hidden">
            <Image
              src={avatar}
              alt="avatar"
              className="w-full h-full object-cover"
              priority={true}
            />
          </div>
          <Link href="#" className="flex flex-col items-start">
            <h1 className="text-sm font-semibold">John Doe</h1>
            <p className="text-gray-500">1234567890</p>
          </Link>
        </div>
        <Video
          className="border dark:border-gray-700 p-2 rounded-full shadow-lg hover:bg-blue-500 hover:text-white cursor-pointer"
          size={40}
        />
      </div>

      <div className=" p-4 rounded-xl bg-gray-100 dark:bg-gray-950 dark:text-gray-300 mt-2">
        <div className="flex gap-x-2 text-sm">
          <Clock size={15} />
          <span className="text-gray-700 dark:text-gray-300 -mt-1">
            02:00 PM - 03:00 PM
          </span>
        </div>
        <h1 className="font-serif ml-6 text-sm">General visit</h1>
      </div>

      <div className="flex gap-x-2 mt-4">
        <IconWrapper
          icon={Eye}
          strokeWidth={3}
          className="hover:bg-blue-500 text-default-500 hover:text-white transition-all delay-100 ease-out"
        />
        <IconWrapper
          icon={MessageCircle}
          strokeWidth={3}
          className="hover:bg-blue-500 text-default-500 hover:text-white transition-all delay-100 ease-out"
        />
        <IconWrapper
          icon={X}
          strokeWidth={3}
          className="hover:bg-red-500 text-default-500 hover:text-white transition-all delay-100 ease-out"
        />
      </div>
    </div>
  );
}
