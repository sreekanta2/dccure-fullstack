import { CheckMark } from "@/components/svg";
import { Button } from "@/components/ui/button";
import { avatar } from "@/config/user.config";
import {
  BookmarkPlus,
  Building,
  CalendarDays,
  Check,
  Clock,
  Dot,
  Heart,
  Link as IconLink,
  MapPin,
  MessageCircle,
  Phone,
  Share2,
  Target,
  ThumbsUp,
  Video,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProfileHeader({ doctorId }: { doctorId: string }) {
  return (
    <div className=" w-full border rounded-md p-4 bg-card ">
      <div className="w-full flex flex-col lg:flex-row  justify-between  gap-4 ">
        <div className="flex flex-col md:flex-row  items-start gap-4 w-full ">
          <div className="p-0 border-b-0 rounded-md overflow-hidden ">
            <Image src={avatar} alt="jj" width={150} height={150} />
          </div>
          <div className="space-y-3 p-0">
            <div className="flex items-center gap-x-1 bg-info/10 text-info-700  w-fit pr-2 rounded-full ">
              <span>
                <Dot />
              </span>
              <span>available</span>
            </div>

            <div>
              <div className="flex items-center gap-x-4">
                <h1 className="text-lg text-default-800">Jhon doe</h1>
                <span className="w-5 h-5">
                  <CheckMark />
                </span>
              </div>
              <p className="text-xs text-default-600  ">
                MBBS, Dentist - Oral & Maxillofacial Surgery
              </p>
            </div>
            <p className=" text-default-600  ">
              Speaks : English, French, German
            </p>
            <div className="flex gap-2 items-center">
              <span className="w-8 h-8 rounded-full flex items-center justify-center border">
                <MapPin size={14} className=" text-success" />
              </span>
              <span>0.9 mi - Newyork, USA</span>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between gap-4">
          <div className="text-default-600 w-full md:w-fit flex flex-col items-start gap-4 ">
            <div className="flex gap-2 items-center">
              <span className="w-8 h-8 rounded-full flex items-center justify-center border">
                <Clock size={14} className=" text-success" />
              </span>
              <span>Full Time, Online Therapy Available</span>
            </div>
            <div className="flex gap-2 items-center">
              <span className="w-8 h-8 rounded-full flex items-center justify-center border">
                <ThumbsUp size={14} className=" text-info" />
              </span>
              <span>94% Recommended</span>
            </div>
            <div className="flex gap-2 items-center">
              <span className="w-8 h-8 rounded-full flex items-center justify-center border">
                <Building size={14} className=" text-warning" />
              </span>
              <span>Royal Prince Alfred Hospital</span>
            </div>
          </div>
          <div className="text-default-600 w-full md:w-fit flex flex-col items-start gap-4">
            <div className="flex gap-2 items-start  ">
              <span className="w-8 h-8 rounded-full flex items-center justify-center border">
                <Heart size={14} className=" text-destructive" />
              </span>
              <span className="w-8 h-8 rounded-full flex items-center justify-center border">
                <Share2 size={14} className=" text-warning" />
              </span>
              <span className="w-8 h-8 rounded-full flex items-center justify-center border">
                <IconLink size={14} className=" text-warning" />
              </span>
            </div>
            <div className="flex gap-2 items-center">
              <span className="w-6 h-6 rounded-full flex items-center justify-center border border-success">
                <Check size={14} className=" text-success" />
              </span>
              <span>Accepting New Patients</span>
            </div>

            <div className="flex gap-2 items-center flex-wrap">
              <Button
                type="button"
                variant="soft"
                className="flex gap-2 items-center"
              >
                <MessageCircle size={18} />

                <Link href="#">Chat</Link>
              </Button>
              <Button
                type="button"
                variant="soft"
                className="flex gap-2 items-center"
              >
                <Phone size={16} />

                <Link href="#">Audio</Link>
              </Button>
              <Button
                type="button"
                variant="soft"
                className="flex gap-2 items-center"
              >
                <Video size={20} />

                <Link href="#">Video</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-4" />
      <div className="w-full flex items-center flex-wrap justify-between gap-4">
        <div className=" flex gap-4   text-default-600 items-center flex-wrap">
          <div className="flex gap-2 items-center">
            <span className="w-8 h-8 rounded-md flex items-center justify-center border bg-info-700">
              <CalendarDays size={20} className="  text-primary-foreground" />
            </span>
            <span>Nearly 200+ Appointment Booked</span>
          </div>
          <div className="flex gap-2 items-center">
            <span className="w-8 h-8 rounded-md flex items-center justify-center border bg-info">
              <Target size={20} className="  text-primary-foreground" />
            </span>
            <span>ImgIn Practice for 21 Years</span>
          </div>
          <div className="flex gap-2 items-center">
            <span className="w-8 h-8 rounded-md flex items-center justify-center border bg-success">
              <BookmarkPlus size={20} className="  text-primary-foreground" />
            </span>
            <span>15+ Awards</span>
          </div>
        </div>

        <div className="w-fit flex gap-4 items-center flex-wrap">
          <Button variant="soft" color="info">
            <Link href={`/doctors/${doctorId}/booking`}> Book Appointment</Link>
          </Button>
          <p className="text-default-600">
            <span className="font-semibold">Price : $100 - $200</span> for a
            Session
          </p>
        </div>
      </div>
    </div>
  );
}
