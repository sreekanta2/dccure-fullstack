import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import dynamic from "next/dynamic";

interface MedicalRecordsPageViewProps {
  trans: {
    [key: string]: string;
  };
}
const MedicalRecordsPageView = ({ trans }: MedicalRecordsPageViewProps) => {
  const MedicalRecordContent = dynamic(
    () => import("./components/medical-records-content")
  );
  const PrescriptionContent = dynamic(
    () => import("./components/prescription-content")
  );
  return (
    <div className="space-y-6 mb-8">
      <Tabs defaultValue="medical-records" className="w-full h-full ">
        <Card>
          <CardHeader>
            <div className="w-full  text-2xl font-medium text-default-800 flex justify-between items-center ">
              <CardTitle>Medical Records</CardTitle>
              <TabsList className="flex   gap-4 bg-transparent justify-start    h-12">
                <TabsTrigger
                  value="medical-records"
                  className="h-10  w-fit bg-primary/10  hover:text-blue-500     data-[state=active]:bg-primary  data-[state=active]:text-primary-foreground gap-4 "
                >
                  <span> Medical Records</span>
                  <span className="    px-1 h-5   flex items-center justify-center rounded-full bg-primary-foreground text-default-800  ">
                    19
                  </span>
                </TabsTrigger>
                <TabsTrigger
                  value="prescription"
                  className="h-10  w-32 bg-primary/10  hover:text-blue-500     data-[state=active]:bg-primary  data-[state=active]:text-primary-foreground  gap-4 "
                >
                  <span> Prescription</span>
                  <span className="   px-1 h-5   flex items-center justify-center rounded-full bg-primary-foreground text-default-800  ">
                    19
                  </span>
                </TabsTrigger>
              </TabsList>
            </div>
          </CardHeader>
          <hr className="my-2" />

          <CardContent className="px-4 space-y-4 ">
            {/* appointmnet */}

            <div className="flex flex-col gap-4 my-2">
              <TabsContent value="medical-records">
                <MedicalRecordContent />
              </TabsContent>
              <TabsContent value="prescription">
                <PrescriptionContent />
              </TabsContent>
            </div>

            {/* pagination */}
          </CardContent>
        </Card>
      </Tabs>
    </div>
  );
};

export default MedicalRecordsPageView;
