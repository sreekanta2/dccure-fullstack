import DatePickerWithRange from "@/components/date-picker-with-range";
import SearchInput from "@/components/SearchInput";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import dynamic from "next/dynamic";

interface AppointmentsPageViewProps {
  trans: {
    [key: string]: string;
  };
}
const AppointmentsPageView = ({ trans }: AppointmentsPageViewProps) => {
  const ActiveDoctors = dynamic(() => import("./components/ActiveDoctors"));
  const InActiveDoctors = dynamic(() => import("./components/InActiveDoctors"));
  return (
    <div className="space-y-6 mb-8">
      <Card>
        <CardHeader className="border-none pb-0">
          <div className="flex items-center flex-wrap justify-between gap-4">
            <div className="w-full text-2xl flex justify-between items-center font-medium text-default-800 ">
              <CardTitle>Favorites doctor</CardTitle>
            </div>
          </div>
        </CardHeader>
        <hr className="my-2" />

        <CardContent className="px-4 space-y-4 ">
          <Tabs defaultValue="active" className="w-full h-full ">
            <div className="flex h-full  flex-col-reverse lg:flex-row items-center justify-between gap-4">
              <TabsList className="flex   gap-4 bg-transparent justify-start    h-12">
                <TabsTrigger
                  value="active"
                  className="h-10  w-32 bg-primary/10  hover:text-blue-500     data-[state=active]:bg-primary  data-[state=active]:text-primary-foreground gap-4 "
                >
                  <span> Active</span>
                  <span className=" bg-primary-50 px-1 h-5 rounded-lg flex items-center text-default-500">
                    19
                  </span>
                </TabsTrigger>
                <TabsTrigger
                  value="inactive"
                  className="h-10  w-32 bg-primary/10  hover:text-blue-500     data-[state=active]:bg-primary  data-[state=active]:text-primary-foreground gap-4 "
                >
                  <span> Inactive</span>
                  <span className=" bg-primary-50 px-1 h-5 rounded-lg flex items-center text-default-500">
                    100
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
              <TabsContent value="active">
                <ActiveDoctors />
              </TabsContent>
              <TabsContent value="inactive">
                <InActiveDoctors />
              </TabsContent>
            </div>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default AppointmentsPageView;
