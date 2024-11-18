"use client";
import DashboardDropdown from "@/components/dashboard-dropdown";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import dribble from "@/public/images/social/dribble.png";
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
    name: "Dribble",
    link: "www.dribble.com",
    total: "1963",
    image: dribble,
  },
];
const Clinics = () => {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between border-none pb-0">
        <CardTitle> Clinics & Availability </CardTitle>

        <DashboardDropdown />
      </CardHeader>
      <hr className="" />
      <CardContent className="px-2 pb-4">
        <div className="max-h-[620px] mt-2 space-y-4">
          {socials.map((item, index) => (
            <div
              className=" bg-card rounded-md p-4 mx-2         "
              style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
            >
              <div className="w-full flex justify-between items-center gap-3 border-b pb-2">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12  ">
                    <Image
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      priority={true}
                    />
                  </div>

                  <h1>{item.name}</h1>
                </div>
                <span className="justify-self-end">$100</span>
              </div>
              <div className="w-full flex    flex-col p-2     rounded-md text-xs gap-2">
                <span>Tue : 07:00 AM - 09:00 PM</span>
                <span>Wed : 07:00 AM - 09:00 PM</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Clinics;
