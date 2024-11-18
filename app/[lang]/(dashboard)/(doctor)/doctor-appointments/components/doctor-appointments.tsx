"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import DatePickerWithRange from "@/components/date-picker-with-range";
import Pagination from "@/components/PaginationComponents";
import SearchInput from "@/components/SearchInput";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSearchParams } from "next/navigation";
import CanceledAnointmentContent from "./canclled-appointments";
import CompletedAnointmentContent from "./completed-appointments";
const DoctorAppointments = () => {
  const searchParams = useSearchParams(); // Get searchParams from the URL
  const appointmentsPage = parseInt(
    searchParams.get("appointmentsPage") || "1",
    10
  ); // Default to "1" if null
  const usersPage = parseInt(searchParams.get("usersPage") || "1", 10); // Default to "1" if null

  const appointmentsTotalPages = 10; // Replace with actual data fetching logic
  const usersTotalPages = 5;
  return (
    <>
      <Card>
        <CardHeader className="border-none pb-0">
          <div className="flex items-center flex-wrap justify-between gap-4">
            <div className="text-2xl font-medium text-default-800 ">
              <CardTitle>Appointments</CardTitle>
            </div>
          </div>
        </CardHeader>
        <hr className="my-2" />

        <CardContent className="px-4 space-y-4 ">
          <Tabs defaultValue="completed" className="w-full h-full ">
            <div className="flex h-full  flex-col-reverse lg:flex-row items-center justify-between gap-4">
              <TabsList className="flex   gap-4 bg-transparent justify-start    h-12">
                <TabsTrigger
                  value="completed"
                  className="h-10  w-32 bg-primary/10  hover:text-blue-500     data-[state=active]:bg-primary  data-[state=active]:text-primary-foreground gap-4 "
                >
                  <span> Completed</span>
                  <span className=" bg-primary-50 px-1 h-5 rounded-lg flex items-center text-default-500">
                    19
                  </span>
                </TabsTrigger>
                <TabsTrigger
                  value="canceled"
                  className="h-10  w-32 bg-primary/10  hover:text-blue-500     data-[state=active]:bg-primary  data-[state=active]:text-primary-foreground gap-4 "
                >
                  <span> Canceled</span>
                  <span className=" bg-primary-50 px-1 h-5 rounded-lg flex items-center text-default-500">
                    19
                  </span>
                </TabsTrigger>
              </TabsList>
              <div className="flex w-full flex-wrap md:flex-nowrap  lg:w-fit gap-4  ">
                <SearchInput searchParamKey="q" />
                <DatePickerWithRange />
              </div>
            </div>

            {/* appointmnet */}

            <div className="flex flex-col gap-4 my-2">
              <TabsContent value="completed">
                <CompletedAnointmentContent />
              </TabsContent>
              <TabsContent value="canceled">
                <CanceledAnointmentContent />
              </TabsContent>
            </div>
          </Tabs>

          {/* pagination */}
          <Pagination
            currentPage={appointmentsPage}
            totalPages={appointmentsTotalPages}
            queryKey="appointmentsPage"
          />
        </CardContent>
      </Card>
    </>
  );
};

export default DoctorAppointments;
