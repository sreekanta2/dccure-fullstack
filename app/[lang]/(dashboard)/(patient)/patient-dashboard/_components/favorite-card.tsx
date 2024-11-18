import DashboardDropdown from "@/components/dashboard-dropdown";
import IconWrapper from "@/components/IconWraper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { avatar } from "@/config/user.config";
import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FavoritesCard() {
  return (
    <div>
      <Card>
        <CardHeader className="flex-row items-center justify-between border-none pb-0">
          <CardTitle> Recent Appointments </CardTitle>

          <DashboardDropdown />
        </CardHeader>
        <hr className="my-2" />

        <CardContent className="  space-y-2 max-h-[600px] px-2   ">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              className="w-full flex justify-between items-center p-2 shadow-md rounded-md hover:bg-default-200 dark:hover:bg-default-200 transition-all duration-500  "
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

              <IconWrapper
                icon={Calendar}
                strokeWidth={2}
                className="hover:bg-green-400 text-gray-500 hover:text-white"
              />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
