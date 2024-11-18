"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import DatePickerWithRange from "@/components/date-picker-with-range";
import Pagination from "@/components/PaginationComponents";
import SearchInput from "@/components/SearchInput";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSearchParams } from "next/navigation";
import ActivePatientsContent from "./active-patinet-content";
import InActivePatientContent from "./inactive-patinet-content";

const DoctorPatients = () => {
  const searchParams = useSearchParams(); // Get searchParams from the URL
  const patientsPage = parseInt(searchParams.get("patientsPage") || "1", 10); // Default to "1" if null
  const usersPage = parseInt(searchParams.get("usersPage") || "1", 10); // Default to "1" if null

  const patientsTotalPages = 10; // Replace with actual data fetching logic
  const usersTotalPages = 5;
  return (
    <>
      <Card>
        <CardHeader className="border-none pb-0">
          <div className="flex items-center flex-wrap justify-between gap-4">
            <div className="text-2xl font-medium text-default-800 ">
              <CardTitle>My Patients</CardTitle>
            </div>
          </div>
        </CardHeader>
        <hr className="my-2" />

        <CardContent className="p-4 space-y-4 ">
          <Tabs defaultValue="active" className="w-full ">
            <div className="flex   flex-col-reverse lg:flex-row   justify-between gap-4">
              <TabsList className=" w-full flex items-center justify-start bg-transparent gap-4    h-12">
                <TabsTrigger
                  value="active"
                  className="h-10  w-32 bg-primary/10  hover:text-blue-500     data-[state=active]:bg-primary  data-[state=active]:text-primary-foreground gap-4 "
                >
                  Active
                  <span className=" bg-primary-50 px-1 h-5 rounded-lg flex items-center text-default-500">
                    19
                  </span>
                </TabsTrigger>

                <TabsTrigger
                  value="inactive"
                  className="h-10 w-32 bg-primary/10  hover:text-blue-500     data-[state=active]:bg-primary  data-[state=active]:text-primary-foreground gap-4 "
                >
                  <span> In Active</span>
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
              <ActivePatientsContent />
              <InActivePatientContent />
            </div>
          </Tabs>

          {/* pagination */}
          <Pagination
            currentPage={patientsPage}
            totalPages={patientsTotalPages}
            queryKey="patientsPage"
          />
        </CardContent>
      </Card>
    </>
  );
};

export default DoctorPatients;
