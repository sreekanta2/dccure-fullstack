import DatePickerWithRange from "@/components/date-picker-with-range";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ReportsSnapshot from "./_components/reports-snapshot";
import UsersStat from "./_components/users-stat";

import UserDeviceReport from "./_components/user-device-report";
import UserStats from "./_components/user-stats-chart";

import Appointments from "./_components/appointments";
import Clinics from "./_components/clinics";
import Invoices from "./_components/patients-and-invoices/invoices";
import RecentPatients from "./_components/patients-and-invoices/patients-component";

interface DashboardPageViewProps {
  trans: {
    [key: string]: string;
  };
}
const DashboardPageView = ({ trans }: DashboardPageViewProps) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center flex-wrap justify-between gap-4">
        <div className="text-2xl font-medium text-default-800 ">
          Analytics {trans?.dashboard}
        </div>
        <DatePickerWithRange />
      </div>
      {/* reports area */}
      <div className="grid grid-cols-12  gap-6 ">
        <div className="col-span-12 lg:col-span-8">
          <ReportsSnapshot />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <UsersStat />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="border-none p-6 pt-5 mb-0">
            <CardTitle className="text-lg font-semibold text-default-900 p-0">
              Paid and Refund
            </CardTitle>
          </CardHeader>
          <CardContent>
            <UserStats />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="border-none p-6 pt-5 mb-0">
            <CardTitle className="text-lg font-semibold text-default-900 p-0">
              Device Breakdown
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="dashtail-legend">
              <UserDeviceReport />
            </div>
          </CardContent>
        </Card>
      </div>
      {/* clinic and appointments */}
      <div className="grid grid-cols-12 gap-6 my-10">
        <div className="col-span-12 lg:col-span-4  ">
          <Clinics />
        </div>
        <div className="col-span-12 lg:col-span-8">
          <Appointments />
        </div>
      </div>

      {/* recent patients and invoices */}

      <div className="grid grid-cols-12 gap-6 my-10">
        <div className="col-span-12 lg:col-span-4  ">
          <RecentPatients />
        </div>
        <div className="col-span-12 lg:col-span-8">
          <Invoices />
        </div>
      </div>
    </div>
  );
};

export default DashboardPageView;
