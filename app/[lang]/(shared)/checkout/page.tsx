import { CheckMark } from "@/components/svg";
import { Rating } from "@/components/ui/rating";
import { avatar } from "@/config/user.config";
import Image from "next/image";
import Link from "next/link";
import CheckoutForm from "./components/checkout-form";
import CheckoutHero from "./components/hero";

export default function CheckoutPage() {
  return (
    <div>
      <CheckoutHero />

      <div className="bg-card">
        <div className="max-w-7xl p-6 rounded-md mx-auto">
          <div className="flex flex-col lg:flex-row justify-between gap-8">
            <div className="w-full p-6 border rounded-md ">
              <h2 className="text-lg font-semibold">Personal Information</h2>
              <hr />
              <CheckoutForm />
            </div>
            <div className="w-full max-w-sm border rounded-md ">
              <h2 className="text-lg font-semibold p-6">Booking Summary</h2>
              <hr />

              <div className="flex   items-start gap-x-4 p-6  ">
                <div className="p-0 border-b-0 rounded-md overflow-hidden ">
                  <Image src={avatar} alt="jj" width={80} height={80} />
                </div>
                <div className="space-y-1 p-0">
                  <div>
                    <div className="flex items-center gap-x-4">
                      <h1 className="text-lg">
                        <Link href={`/doctors/${1}`}>Jhon doe</Link>
                      </h1>
                      <span className="w-5 h-5">
                        <CheckMark />
                      </span>
                    </div>
                    <p className="text-xs text-default-600 -mt-1">
                      MBBS, Dentist
                    </p>
                  </div>

                  <div className="  text-default-600 flex flex-col gap-1">
                    <Rating
                      value={parseInt("4")}
                      readOnly
                      className="gap-x-1.5 max-w-[125px]"
                    />

                    <span>(44) reviews</span>
                  </div>
                </div>
              </div>
              <h1 className="font-medium text-default-600 px-6">
                Date :16 Nov 2023 Time :10:00 AM
              </h1>

              <ul className="p-6 space-y-2">
                <li className="flex justify-between items-center">
                  <span>Consulting Fee</span>
                  <span>$100</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Booking fee</span>
                  <span>$10</span>
                </li>
                <hr />
                <li className="flex justify-between items-center">
                  <span>Total</span>
                  <span>$110</span>
                </li>
              </ul>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
