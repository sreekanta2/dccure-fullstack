import {
  CopyPlus,
  Heart,
  PartyPopper,
  Plus,
  Syringe,
  User,
} from "lucide-react";
import FavoritesCard from "./favorite-card";
import UserProgressChart from "./user-health-overall-chart";
export default function HealthRecords() {
  return (
    <div className="grid  lg:grid  lg:grid-cols-3 gap-4">
      <div className="w-full border lg:col-span-2 px-4 py-6 rounded-md">
        <div className="  flex justify-between mb-4  ">
          <h1 className="text-lg font-semibold  text-gray-600 ">
            Health Records
          </h1>
          <div>{/* <HealthRecordsFilteringForm /> */}</div>
        </div>
        <hr className="my-4" />

        <div className=" flex flex-col gap-6 col-span-3 md:border-r border-b pb-4 jc  md:pb-0 md:border-b-0">
          <UserProgressChart height={250} />

          <p className="text-center -mt-8">Your health is 95% Normal</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
            {/* First Column */}
            <div className="">
              <div className="text-xs font-extralight flex items-center gap-x-1">
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
              <div className="text-xs font-extralight flex items-center gap-x-1">
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
              <div className="text-xs font-extralight flex items-center gap-x-1">
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
              <div className="text-xs font-extralight flex items-center gap-x-1">
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
              <div className="text-xs font-extralight flex items-center gap-x-1">
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
              <div className="text-xs font-extralight flex items-center gap-x-1">
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
      </div>
      {/* book appintments */}
      <div className=" lg:col-span-1 flex flex-col gap-4 w-full">
        <div className=" flex justify-between px-4 border py-4 rounded-md items-center bg-[#4338ca] text-white">
          <div>
            <h1>Book a new</h1>
            <h1>Appointment</h1>
          </div>

          <Plus className="cursor-pointer" />
        </div>

        {/* favorite */}

        <FavoritesCard />
      </div>
    </div>
  );
}
