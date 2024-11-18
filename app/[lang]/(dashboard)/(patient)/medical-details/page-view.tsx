import {
  CalendarHeart,
  CopyPlus,
  Heart,
  PartyPopper,
  Syringe,
  User,
} from "lucide-react";
import MedicalDetailLst from "./components/medical-details-list";
interface MedicalDetailsPageViewProps {
  trans: {
    [key: string]: string;
  };
}
const MedicalDetailsPageView = ({ trans }: MedicalDetailsPageViewProps) => {
  return (
    <div className="space-y-6 mb-8 bg-card p-6 rounded-md">
      <div className=" border  rounded-md ">
        <div className="w-full flex flex-col  md:flex-row items-center justify-between gap-2 border-b mb-4 p-4">
          <span className="w-full text-xl font-medium text-gray-800 dark:text-gray-400">
            Latest updated medical details
          </span>
          <div className=" w-full flex items-center gap-x-1 justify-self-end">
            <CalendarHeart />
            <span>Last update on : 24Mar 2023</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6  gap-4 p-4 ">
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
      <MedicalDetailLst />
    </div>
  );
};

export default MedicalDetailsPageView;
