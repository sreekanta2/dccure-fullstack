import ImageComponent from "@/components/ImageComponent";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { avatar } from "@/config/user.config";

import { Dot } from "lucide-react";
import { DependentsForm } from "./dependents-form";

export default function DependantsCard() {
  return (
    <div
      className="  justify-between items-center  shadow-md rounded-md hover:bg-default-200 dark:hover:bg-default-200 transition-all duration-500 w-full grid grid-cols-1 md:grid-cols-2 p-3  gap-4    "
      style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
    >
      <div className="flex gap-4  items-center">
        <div className="w-14 h-14 rounded-md">
          <ImageComponent
            src={avatar}
            alt="profile"
            className="rounded-lg"
            priority
          />
        </div>
        <div className="">
          <h1 className="text-lg">Shusila</h1>
          <p className="text-sm  flex flex-wrap items-center">
            <span className="flex items-center">
              <Dot className="text-blue-400 -ml-4 -mr-3" size={40} />
              Mother
            </span>
            <span className="flex items-center">
              <Dot className="text-blue-400 -ml-2 -mr-3" size={40} />
              Female
            </span>
            <span className="flex items-center">
              <Dot className="text-blue-400 -ml-4 md:-ml-2 -mr-3" size={40} />
              58 years 20 days
            </span>
          </p>
        </div>
      </div>
      <div className=" w-full flex items-center justify-between">
        <div className=" ">
          <h1 className="">Shusila</h1>
          <p className="  flex items-center stext-lg mt-1">A+ ve</p>
        </div>
        <div className="flex items-center space-x-2">
          <Label htmlFor="airplane-mode">Detective</Label>
          <Switch defaultChecked={false} />
          <Label htmlFor="airplane-mode">Active</Label>
          <DependentsForm edit />
        </div>
      </div>
    </div>
  );
}
