import Image from "next/image";

import { avatar } from "@/config/user.config";
import { MapPin, User } from "lucide-react";
import Link from "next/link";

import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Rating } from "../ui/rating";

export default function DoctorCard() {
  return (
    <Card className="  bg-card  border rounded-md">
      <div className="px-2 space-y-2">
        <CardHeader className="   px-2 border-b-0 pb-0 ">
          <div className="w-full h-52 relative overflow-hidden rounded-t-lg">
            <Image
              src={avatar || ""}
              layout="fill"
              objectFit="cover"
              className="cursor-pointer duration-500 hover:scale-125 transition-transform group-hover:opacity-50"
              alt="background image"
            />
          </div>
        </CardHeader>
        <CardContent className=" p-0 px-2 space-y-4  ">
          <div className="flex items-center gap-x-2">
            <Rating value={2} readOnly className="gap-x-1.5 max-w-[150px]" />
            <span className=" px-1 bg-primary rounded-md text-primary-foreground">
              3.0
            </span>
          </div>

          <CardTitle className="space-y-1">
            <Link href="/doctors/1">Dr. Ruby Perrin</Link>
            <p className="text-sm text-default-400">
              BDS ,MDS -Oral & Maxillofacial
            </p>
          </CardTitle>
          <CardDescription className="  text-xs space-y-1">
            <p className="flex items-center gap-2">
              <MapPin size={14} />
              <span>Dallas ,usa</span>
            </p>
            <p className="flex items-center gap-2">
              <User size={14} />
              <span>400 Consultations</span>
            </p>
          </CardDescription>
        </CardContent>
        <CardFooter className=" grid grid-cols-2 gap-2 p-0 py-2 ">
          <Button variant="soft" color="primary" className="text-primary">
            <Link href="/booking">Book Now</Link>
          </Button>

          <Button variant="soft" color="primary" className="text-primary">
            <Link href="/booking">View Profile</Link>
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
}
