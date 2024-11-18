import Pagination from "@/components/PaginationComponents";
import { CheckMark } from "@/components/svg";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Rating } from "@/components/ui/rating";
import { avatar } from "@/config/user.config";
import { Award, Clock, DollarSign, MapPin, ThumbsUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import DoctorFilteringPageForm from "./doctors-filtering-form";

export default function DoctorFilteringPage() {
  const genderOptions = ["Male", "Female"];
  const avalable = [
    "Available Today",
    "Available Tomorrow",
    "Available in Next 7 Days",
    "Available in Next 3 Days",
  ];
  return (
    <div className="bg-default-100">
      <div className=" max-w-[1280px] mx-auto   relative  px-6 lg:px-0 py-8">
        <div className=" flex flex-col lg:flex-row  gap-8 ">
          <div className="w-full lg:max-w-sm ">
            <div className="w-full  ">
              <h2 className="text-xl font-semibold   mb-2     ">Filter</h2>
              <DoctorFilteringPageForm />
            </div>
          </div>
          <div className=" w-full">
            <h1>100 doctors found</h1>
            <div className="my-4 space-y-4">
              {[1, 2, 3, 4, 5].map((item) => (
                <Card
                  className="w-full flex flex-col md:flex-row  justify-between   "
                  key={item}
                >
                  <div className="flex flex-col md:flex-row  items-start gap-x-4 p-4">
                    <CardHeader className="p-0 border-b-0 rounded-md overflow-hidden ">
                      <Image src={avatar} alt="jj" width={150} height={150} />
                    </CardHeader>
                    <CardContent className="space-y-4 p-0">
                      <div>
                        <div className="flex items-center gap-x-4">
                          <CardTitle className="text-lg">
                            <Link href={`/doctors/${item}`}>Jhon doe</Link>
                          </CardTitle>
                          <span className="w-5 h-5">
                            <CheckMark />
                          </span>
                        </div>
                        <p className="text-xs text-default-600 -mt-1">
                          MBBS, Dentist
                        </p>
                      </div>

                      <div className="space-y-2 text-default-600">
                        <div className="flex gap-2">
                          <MapPin size={14} />
                          <span className="text-xs">0.9 mi - Newyork, USA</span>
                        </div>
                        <div className="flex gap-2">
                          <span className=" w-4 flex">
                            <Award size={16} />
                          </span>
                          <span className="text-xs">
                            20 Years of Experience
                          </span>
                        </div>
                      </div>
                      <div className="  text-default-600 flex flex-col gap-1">
                        <Rating
                          value={parseInt("4")}
                          readOnly
                          className="gap-x-1.5 max-w-[125px]"
                        />

                        <span>(44) reviews</span>
                      </div>
                    </CardContent>
                  </div>

                  <CardFooter className="text-default-600 w-full md:w-fit flex flex-col items-start gap-4 p-4">
                    <div className="flex gap-2">
                      <Clock size={14} />
                      <span className="text-xs">0.9 mi - Newyork, USA</span>
                    </div>
                    <div className="flex gap-2">
                      <ThumbsUp size={14} />
                      <span className="text-xs">98% (252 Votes)</span>
                    </div>
                    <div className="flex gap-2">
                      <DollarSign size={14} />
                      <span className="text-xs">$400</span>
                    </div>
                    <Button
                      type="button"
                      variant="soft"
                      color="info"
                      className="w-full"
                    >
                      <Link href={`/doctors/${item}/booking`}>
                        Book Appointment
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
              <Pagination currentPage={1} totalPages={10} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
