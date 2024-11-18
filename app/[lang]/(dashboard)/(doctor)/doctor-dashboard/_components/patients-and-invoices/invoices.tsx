import Image from "next/image";

import IconWrapper from "@/components/IconWraper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye } from "lucide-react";
import Link from "next/link";

import DashboardDropdown from "@/components/dashboard-dropdown";
import avatar from "@/public/images/avatar/avatar-1.jpg";
const Invoices = () => {
  // Get searchParams from the URL

  return (
    <>
      <Card>
        <CardHeader className="flex-row items-center justify-between border-none pb-0">
          <CardTitle> Recent Invoices </CardTitle>

          <DashboardDropdown />
        </CardHeader>
        <hr />

        <CardContent className="p-4 space-y-6  max-h-[600px]">
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
                <p className="text-gray-500">Amount</p>
                <p className=" w-fit px-2 rounded-lg text-default-400 text-sm font-sans flex justify-center">
                  $200
                </p>
              </div>
              <div>
                <p className="   text-sm font-sans text-default-500 flex justify-center">
                  Paid on
                </p>
                <p className="text-gray-500">Mon, 12:00 PM</p>
              </div>

              <div className="flex gap-4">
                <IconWrapper
                  icon={Eye}
                  strokeWidth={2}
                  className="hover:bg-green-400 text-gray-500 hover:text-white"
                />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </>
  );
};

export default Invoices;
