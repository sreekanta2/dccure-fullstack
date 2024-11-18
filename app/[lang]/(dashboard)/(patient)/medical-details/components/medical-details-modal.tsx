"use client";

import ImageComponent from "@/components/ImageComponent";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { avatar } from "@/config/user.config";

import {
  CopyPlus,
  Dot,
  Heart,
  Link,
  PartyPopper,
  Syringe,
  User,
} from "lucide-react";
export function MedicalDetailsModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Link
          className="border dark:border dark:border-gray-700 p-2 rounded-full shadow-lg hover:bg-blue-500 hover:text-white cursor-pointer"
          size={32}
        />
      </DialogTrigger>
      <DialogContent className="w-full max-w-xl p-6  ">
        <DialogHeader className="border-b pb-4">
          <h1 className="text-lg font-semibold">Last Update </h1>
        </DialogHeader>

        <div className=" border  rounded-md ">
          <div
            className="  justify-between items-center  shadow-md rounded-md hover:bg-default-200 dark:hover:bg-default-200 transition-all duration-500 w-full  p-6   "
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
                <p className="text-sm  flex   items-center">
                  <span className="flex items-center">
                    <Dot className="text-blue-400 -ml-4 -mr-3" size={40} />
                    Mother
                  </span>
                  <span className="flex items-center">
                    <Dot className="text-blue-400 -ml-2 -mr-3" size={40} />
                    Female
                  </span>

                  <span className="flex items-center">
                    <Dot className="text-blue-400 -ml-4 -mr-3" size={40} />
                    AB+ve
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2   gap-4 p-4 ">
            {/* First Column */}
            <div className="">
              <div className="text-xs font-extra-light flex items-center gap-x-1">
                <Heart
                  size={14}
                  className="text-red-400 font-bold"
                  strokeWidth={4}
                />
                <span>Heart Rate</span>
              </div>
              <div className="py-1 rounded-lg">
                <span className="text-lg font-medium text-gray-800 dark:text-gray-400">
                  140 <span className="text-lg">Bpm</span>
                </span>
                <sup className="text-sm font-semibold text-green-500 -mt-2">
                  2<span className="text-sm">%</span>
                </sup>
              </div>
            </div>

            {/* Second Column */}
            <div className="  ">
              {/* Add justify-self-end here */}
              <div className="text-xs font-extra-light flex items-center gap-x-1">
                <PartyPopper
                  size={14}
                  className="text-red-400 font-bold"
                  strokeWidth={4}
                />
                <span>Body Temprature</span>
              </div>
              <div className="py-1 rounded-lg">
                <span className="text-lg font-medium text-gray-800 dark:text-gray-400">
                  37.5 C
                </span>
              </div>
            </div>

            {/* glucose level */}

            {/* First Column */}
            <div className="">
              <div className="text-xs font-extra-light flex items-center gap-x-1">
                <CopyPlus
                  size={14}
                  className="text-blue-400 font-bold"
                  strokeWidth={4}
                />
                <span>Glucose Level</span>
              </div>
              <div className="py-1 rounded-lg">
                <span className="text-lg font-medium text-gray-800 dark:text-gray-400">
                  70 -90
                </span>
                <sup className="text-sm font-semibold text-green-500 -mt-2">
                  6<span className="text-sm">%</span>
                </sup>
              </div>
            </div>

            {/* Second Column */}
            <div className=" ">
              {/* Add justify-self-end here */}
              <div className="text-xs font-extra-light flex items-center gap-x-1">
                <Syringe
                  size={14}
                  className="text-blue-400 font-bold"
                  strokeWidth={4}
                />
                <span>SPo2</span>
              </div>
              <div className="py-1 rounded-lg">
                <span className="text-lg font-medium text-gray-800 dark:text-gray-400">
                  37.5 C
                </span>
              </div>
            </div>

            {/* First Column */}
            <div className="">
              <div className="text-xs font-extra-light flex items-center gap-x-1">
                <Syringe
                  size={14}
                  className="text-red-400 font-bold"
                  strokeWidth={4}
                />
                <span>Blood Pressure</span>
              </div>
              <div className="py-1 rounded-lg">
                <span className="text-lg font-medium text-gray-800 dark:text-gray-400">
                  100 mg/dl
                </span>
                <sup className="text-sm font-semibold text-green-500 -mt-2">
                  2<span className="text-sm">%</span>
                </sup>
              </div>
            </div>

            {/* Second Column */}
            <div className=" ">
              {/* Add justify-self-end here */}
              <div className="text-xs font-extra-light flex items-center gap-x-1">
                <User
                  size={14}
                  className="text-red-400 font-bold"
                  strokeWidth={4}
                />
                <span>BMI</span>
              </div>
              <div className="py-1 rounded-lg">
                <span className="text-lg font-medium text-gray-800 dark:text-gray-400">
                  20.1 kg/m2
                </span>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
