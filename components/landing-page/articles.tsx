import { avatar } from "@/config/user.config";
import Image from "next/image";
import { CalenderCheck, User } from "../svg";

export default function Articles() {
  return (
    <div className="px-6 lg:px-0 max-w-7xl mx-auto  my-8    ">
      <h1 className="text-2xl font-medium text-primary pb-4 ">
        Latest Articles
      </h1>

      <div className="grid  grid-cols-1 lg:grid-cols-2 gap-8 ">
        {[1, 2, 3, 4].map((a, i) => (
          <div
            key={a}
            className="w-full border rounded-md  p-6 flex flex-col lg:flex-row  items-start gap-4"
          >
            <Image src={avatar} alt="" width={200} height={200} />
            <div className="space-y-2">
              <div className="flex gap-4">
                <div className="flex gap-2 items-start">
                  <div className="w-4 h-4">
                    <User />
                  </div>
                  <h1 className="text-xs  ">Author Name</h1>
                </div>
                <div className="flex gap-2 items-start">
                  <div className="w-4 h-4">
                    <CalenderCheck />
                  </div>
                  <h1 className="text-xs  ">13 Aug, 2023</h1>
                </div>
              </div>
              <h2 className="text-default-900 font-medium">
                Navigating Telehealth: A Guide to Virtual Healthcare Visits
              </h2>
              <p className=" text-default-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                neque elit. Sed euismod, nunc ut commodo facilisis, nunc tellus
                commodo risus, at convallis metus neque euismod.
              </p>
              <button className="border px-4 py-1 border-primary rounded-md hover:bg-primary">
                Read more
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
