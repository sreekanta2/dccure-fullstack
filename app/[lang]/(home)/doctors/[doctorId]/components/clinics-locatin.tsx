import BasicMap from "@/components/maps-google/basic-map";
import { avatar } from "@/config/user.config";
import Image from "next/image";

export default function ClinicLocation() {
  return (
    <div id="clinics" className="  w-full space-y-4">
      <h1 className="text-lg">Clinics & Locations</h1>
      {[1, 2].map((item) => (
        <div
          className=" flex flex-col lg:flex-row  border   rounded-md justify-between gap-8 p-4 bg-card"
          key={item}
        >
          <div className=" w-full space-y-4 ">
            <div className="flex flex-col md:flex-row  items-start gap-4   ">
              <div className="p-0 border-b-0 rounded-md overflow-hidden ">
                <Image src={avatar} alt="jj" width={100} height={100} />
              </div>
              <div className="space-y-1 p-0">
                <h1 className="text-lg text-default-800">
                  Cambridge University Hospital,
                </h1>

                <p className="text-info">$350 / Appointment</p>
                <p>2286 Sundown Lane, Old Trafford 24541, UK</p>
              </div>
            </div>
            <div className="flex gap-4  ">
              <div className="border  w-full py-4 text-center rounded-md">
                <p>Monda </p>
                <p> 9.00am - 3.00pm</p>
              </div>
              <div className="border py-4 w-full text-center rounded-md">
                <p>Monda </p>
                <p> 9.00am - 3.00pm</p>
              </div>
            </div>
          </div>

          <BasicMap height={200} />
        </div>
      ))}
    </div>
  );
}
