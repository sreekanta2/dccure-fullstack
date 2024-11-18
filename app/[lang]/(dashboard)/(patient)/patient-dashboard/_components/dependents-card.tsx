"use client";
import Image from "next/image";

import IconWrapper from "@/components/IconWraper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X } from "lucide-react";
import Link from "next/link";

import DashboardDropdown from "@/components/dashboard-dropdown";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import avatar from "@/public/images/avatar/avatar-1.jpg";
import { useSearchParams } from "next/navigation";
const DependentsCard = () => {
  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1", 10);

  const totalPages = 10;

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between border-none pb-0">
        <CardTitle> Dependents </CardTitle>

        <DashboardDropdown />
      </CardHeader>
      <hr className="my-2" />
      <ScrollArea className="w-full whitespace-nowrap rounded-md ">
        <CardContent className="px-4 space-y-4 max-h-[600px] min-w-[500px] pb-4 ">
          {[1, 2, 3, 4, 5].map((i) => (
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
                  <h1 className="text-sm font-semibold">Jhon Doe</h1>
                  <p className="text-gray-500">1234567890</p>
                </Link>
              </div>
              <div>
                <p className="text-gray-500">Mon, 12:00 PM</p>
                <p className="  bg-green-400 w-fit px-2 rounded-lg text-white text-sm font-sans flex justify-center">
                  general
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
        </CardContent>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </Card>
  );
};

export default DependentsCard;
