import { avatar } from "@/config/user.config";
import { Dot } from "lucide-react";
import Image from "next/image";

export default function Experience() {
  return (
    <div className="space-y-4 ">
      <h1 className="text-lg">Practice Experience</h1>
      <div
        className="flex flex-col md:flex-row  items-start gap-4 w-full border  p-4 rounded-md bg-card "
        id="experience"
      >
        <div className="p-0 border-b-0 rounded-md overflow-hidden ">
          <Image src={avatar} alt="jj" width={120} height={120} />
        </div>
        <div className="space-y-1 p-0">
          <h1 className="text-lg text-default-800">
            Cambridge University Hospital, NHS Foundation Trust Cambridge
          </h1>

          <div className="flex items-center gap-x-1   text-info-700  w-fit    ">
            <span>ENT</span>
            <span>
              <Dot />
            </span>
            <span>Cambridge</span>
          </div>
          <p className=" text-default-600  ">
            Dec 2020 - Jan 2022 2 Years 2 months
          </p>
          <p>
            Experienced in a wide variety of medical settings, with particular
            expertise in diagnostics, primary care and emergency medicine.
          </p>
        </div>
      </div>
      <div
        className="flex flex-col md:flex-row  items-start gap-4 w-full border  p-4 rounded-md bg-card "
        id="experience"
      >
        <div className="p-0 border-b-0 rounded-md overflow-hidden ">
          <Image src={avatar} alt="jj" width={120} height={120} />
        </div>
        <div className="space-y-1 p-0">
          <h1 className="text-lg text-default-800">
            Cambridge University Hospital, NHS Foundation Trust Cambridge
          </h1>

          <div className="flex items-center gap-x-1   text-info-700  w-fit    ">
            <span>ENT</span>
            <span>
              <Dot />
            </span>
            <span>Cambridge</span>
          </div>
          <p className=" text-default-600  ">
            Dec 2020 - Jan 2022 2 Years 2 months
          </p>
          <p>
            Experienced in a wide variety of medical settings, with particular
            expertise in diagnostics, primary care and emergency medicine.
          </p>
        </div>
      </div>
    </div>
  );
}
