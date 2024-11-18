"use client";
import Image from "next/image";

import IconWrapper from "@/components/IconWraper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Clock, Video, X } from "lucide-react";
import Link from "next/link";

import Pagination from "@/components/PaginationComponents";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import avatar from "@/public/images/avatar/avatar-1.jpg";
import { useSearchParams } from "next/navigation";
const RequestPatient = () => {
  const searchParams = useSearchParams(); // Get searchParams from the URL
  const currentPage = parseInt(searchParams.get("page") || "1", 10); // Default to "1" if null

  return (
    <>
      <Card>
        <CardHeader className="border-none pb-0">
          <CardTitle className="pt-2.5">Appointments</CardTitle>
        </CardHeader>
        <hr className="my-2" />

        <CardContent className="px-4 space-y-4 ">
          <ScrollArea className=" w-full    ">
            <div className="min-w-[800px]  space-y-4 p-4  ">
              {[1, 2, 3, 4, 5, 6.7, 8, 9, 10].map((i) => (
                <div
                  className="w-full flex justify-between items-center p-4 shadow-md rounded-md hover:bg-default-200 dark:hover:bg-default-200 transition-all duration-500  "
                  style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
                  key={i}
                >
                  <div className="flex gap-3 items-start">
                    <div className="w-12 h-12  rounded-sm overflow-hidden ">
                      <Image
                        src={avatar}
                        alt="avatar"
                        className="w-full h-full object-cover"
                        priority={true}
                      />
                    </div>
                    <Link href={`#`} className="flex flex-col items-start">
                      <p className="">
                        <span>Apt id: </span>
                        <span className="text-success">#P002</span>
                      </p>
                      <h1 className="text-sm font-semibold">Jhon Doe</h1>
                    </Link>
                  </div>
                  <div>
                    <p className="text-default-500 flex items-center gap-2">
                      <Clock size={14} /> <span>11 Nov 2024 10.45 AM</span>
                    </p>
                    <p className="  bg-green-400 w-fit px-2 rounded-lg text-white text-sm font-sans flex justify-center">
                      general
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500">Appointment Type</p>
                    <p className=" flex items-center gap-2 ">
                      <Video size={20} fill="#846cf9" strokeWidth={0} />
                      <span className="text-sm text-default-500">general</span>
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <IconWrapper
                      icon={Check}
                      strokeWidth={2}
                      className="hover:bg-green-400 text-gray-500 hover:text-white"
                    />
                    <IconWrapper
                      icon={X}
                      strokeWidth={2}
                      className="text-gray-500 hover:bg-red-400  hover:text-white "
                    />
                  </div>
                </div>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
          {/* pagination */}
          <Pagination currentPage={currentPage} totalPages={10} />
        </CardContent>
      </Card>
    </>
  );
};

export default RequestPatient;
