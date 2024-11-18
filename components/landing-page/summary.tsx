import work from "@/public/images/all-img/work-img.png";
import Image from "next/image";
import { Work1, Work2, Work3, Work4 } from "../svg";
export default function Summary() {
  return (
    <div className="bg-primary/10 p-6 pb-0  lg:mt-0 rounded-md  ">
      <div className=" max-w-7xl mx-auto   rounded-md ">
        <div className="flex gap-8 items-center ">
          <div className="w-full max-w-[450px] h-full hidden lg:block ">
            <Image src={work} width={400} height={200} alt="work image" />
          </div>
          <div className="w-full space-y-6">
            <div>
              <span className="text-xs font-bold text-success">
                How it Works
              </span>
              <h1 className="text-2xl font-medium ">
                4 easy steps to get your solution
              </h1>
            </div>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-y-10 gap-x-4    ">
              <div className="flex items-start gap-4">
                <div className="  ">
                  <Work1 />
                </div>

                <div>
                  <h1 className="font-medium">Search Doctor</h1>
                  <p className=" text-default-400">
                    Search for a doctor based on specialization, location, or
                    availability.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8">
                  <Work2 />
                </div>

                <div>
                  <h1 className="font-medium">Check Doctor Profile</h1>
                  <p className=" text-default-400">
                    xplore detailed doctor profiles on our platform to make
                    informed healthcare decisions.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8">
                  <Work3 />
                </div>

                <div>
                  <h1 className="font-medium ">Schedule Appointment</h1>
                  <p className=" text-default-400">
                    After choose your preferred doctor, select a convenient time
                    slot, & confirm your appointment.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8">
                  <Work4 />
                </div>

                <div>
                  <h1 className="font-medium">Get Your Solution</h1>
                  <p className=" text-default-400">
                    Discuss your health concerns with the doctor and receive
                    personalized advice & solution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
