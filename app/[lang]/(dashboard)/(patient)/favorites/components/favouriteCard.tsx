import ImageComponent from "@/components/ImageComponent";
import { Button } from "@/components/ui/button";
import { Rating } from "@/components/ui/rating";
import { avatar } from "@/config/user.config";
import { CalendarCheck, Heart, MapPin } from "lucide-react";
import Link from "next/link";

export default function FavouriteDoctorCard() {
  return (
    <section className="border rounded-md w-full md:max-w-lg  py-4 px-2">
      <div className="flex gap-x-8 justify-center relative">
        <div className="relative w-20 h-20">
          <ImageComponent
            src={avatar}
            alt="profile image"
            className="rounded-lg"
            priority={true}
          />
        </div>

        <Heart
          fill="#EA580C"
          strokeWidth={0}
          size={30}
          className="border rounded-full p-1 cursor-pointer absolute top-0 right-5"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <h1>Srikanto</h1>
        <p className="text-sm text-center font-sans -mt-2">
          MDS - Periodontology and Oral Implantology, BDS
        </p>
        <Rating value={2} readOnly className="gap-x-1.5 max-w-[125px]" />

        <div className="rounded-xl mt-2 space-y-2">
          <div className="flex gap-x-2 text-sm">
            <CalendarCheck size={15} />
            <span className="-mt-1">Next Availability : 23 Mar 2024</span>
          </div>
          <div className="flex gap-x-2 text-sm">
            <MapPin size={16} />
            <span className="-mt-1">Location : Newyork, USA</span>
          </div>
        </div>
        <p className="text-sm text-center font-sans  bg-primary/10   px-4 py-2 rounded-md">
          Last Book on 21 Jan 2023
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between">
        <Button variant="soft" className="">
          <Link href="#" className="  ">
            View Details
          </Link>
        </Button>
        <Button variant="soft" className="">
          <Link href="#" className="  ">
            Book Now
          </Link>
        </Button>
      </div>
    </section>
  );
}
