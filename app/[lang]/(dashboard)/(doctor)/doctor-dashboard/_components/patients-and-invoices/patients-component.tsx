"use client";
import DashboardDropdown from "@/components/dashboard-dropdown";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import avatar from "@/public/images/avatar/avatar-1.jpg";
import facebook from "@/public/images/social/facebook.png";
import instagram from "@/public/images/social/instagram.png";
import Image from "next/image";
const socials = [
  {
    id: 1,
    name: "facebook",
    link: "www.facebook.com",
    total: "4963",
    image: facebook,
  },
  {
    id: 2,
    name: "Instagram",
    link: "www.instagram.com",
    total: "2963",
    image: instagram,
  },
  {
    id: 3,
    name: "Instagram",
    link: "www.instagram.com",
    total: "2963",
    image: instagram,
  },
];
const RecentPatients = () => {
  return (
    <Card className="mb-10">
      <CardHeader className="flex-row items-center justify-between border-none pb-0">
        <CardTitle> Recent Patients </CardTitle>

        <DashboardDropdown />
      </CardHeader>
      <hr />
      <CardContent className="p-4">
        <div className=" max-h-[600px] space-y-4 ">
          {socials.map((item, index) => (
            <div
              className="  rounded-md p-4     bg-card     space-y-2 "
              style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
            >
              <div className="w-12 h-12  rounded-sm overflow-hidden ">
                <Image
                  src={avatar}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  priority={true}
                />
              </div>

              <div>
                <h1 className="text-sm font-medium text-default-600">
                  {item.name}
                </h1>
                <h1 className="text-xs ">
                  <span>patientId</span>{" "}
                  <span className="text-success">#P0001</span>
                </h1>
              </div>
              <hr className="bg-border" />

              <div>
                <p className="text-default-500 text-xs">
                  Last Appointment 15 Mar 2024
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentPatients;
