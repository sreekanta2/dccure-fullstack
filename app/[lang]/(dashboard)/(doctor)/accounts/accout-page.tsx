import { Circle, Wallet2 } from "lucide-react";
import { AccountUpdateModel } from "./components/accout-update-model";
import { AllAccountsModal } from "./components/all-accounts";
import { PaymentRequestModal } from "./components/payment-modal";

export default function AccountsDetails() {
  return (
    <div className="w-full space-y-4  ">
      <h1 className="text-xl      border-b   pb-2 ">Account</h1>

      <div className="  bg-primary    text-white grid grid-cols-1 md:grid-cols-2 gap-8 p-6 rounded-lg">
        <div>
          <h1 className="text-xl     border-b pb-2 ">Statistics</h1>

          <div className=" flex flex-col gap-4 md:flex-row md:justify-between my-3">
            <div>
              <div className=" flex items-center gap-1 ">
                <span>
                  <Wallet2 size={15} strokeWidth={2} />
                </span>
                <span className="text-sm  ">Total Blance</span>
              </div>
              <p className="ml-5 text-2xl">$12,345</p>
            </div>
            <div>
              <div className=" flex items-center gap-1 ">
                <span>
                  <Circle size={15} strokeWidth={3} color="#db2777" />
                </span>
                <span className="text-sm  ">Requested</span>
              </div>
              <p className="ml-5 text-2xl">$1000</p>
            </div>
          </div>

          <div className="space-y-2 mt-4">
            <h1>Last Payment request : 24 Mar 2023</h1>
            <PaymentRequestModal />
          </div>
        </div>
        <div>
          <h1 className="text-xl        pb-2 ">Bank Details</h1>
          <div className=" mt-3 ">
            <h1 className="text-sm">Bank Name</h1>
            <h1>Citi Bank Inc</h1>
          </div>
          <div className=" mt-5 ">
            <h1 className="text-sm">Account Number</h1>
            <h1> 5396 5250 1908 XXXX</h1>
          </div>
          <div className="grid grid-cols-2 mt-4">
            <div className=" ">
              <h1 className="text-sm">Branch Name </h1>
              <h1> London</h1>
            </div>
            <div className=" ">
              <h1 className="text-sm">Account Name</h1>
              <h1>Daren</h1>
            </div>
          </div>
          <div className="flex items-center  mt-8 gap-x-4">
            <AccountUpdateModel />
            <AllAccountsModal />
          </div>
        </div>
      </div>
    </div>
  );
}
