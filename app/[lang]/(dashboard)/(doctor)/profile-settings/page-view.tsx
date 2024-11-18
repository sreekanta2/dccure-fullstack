import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import dynamic from "next/dynamic";

interface ProfileSettingPageViewProps {
  trans: {
    [key: string]: string;
  };
}

const ProfileSettingsPageView = ({ trans }: ProfileSettingPageViewProps) => {
  const tabKeys = Object.keys(trans);

  // Dynamically import each component
  const BasicDetails = dynamic(
    () => import("./components/section/basic-details")
  );
  const Experience = dynamic(() => import("./components/section/experience"));
  const Education = dynamic(() => import("./components/section/education"));
  const Awards = dynamic(() => import("./components/section/awards"));
  const Insurances = dynamic(() => import("./components/section/insurances"));
  const Clinics = dynamic(() => import("./components/section/clinics"));
  const BusinessHours = dynamic(
    () => import("./components/section/business-hour")
  );
  return (
    <div className="space-y-6 mb-8 bg-card p-6 rounded-md">
      <h1 className="text-xl">Profile settings</h1>
      <hr className="my-4 " />
      <div className=" w-full">
        <Tabs defaultValue="basic-details">
          <TabsList className="bg-transparent flex flex-wrap justify-start h-auto gap-4">
            {tabKeys.map((key) => (
              <TabsTrigger
                key={key}
                value={key}
                className="h-10 px-4 bg-primary/10 hover:text-blue-500 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {trans[key]}
              </TabsTrigger>
            ))}
          </TabsList>
          {/* Tabs Content */}
          <TabsContent value="basic-details" className="mt-4">
            <BasicDetails />
          </TabsContent>
          <TabsContent value="experience" className="mt-4">
            <Experience />
          </TabsContent>
          <TabsContent value="education" className="mt-4">
            <Education />
          </TabsContent>
          <TabsContent value="awards" className="mt-4">
            <Awards />
          </TabsContent>
          <TabsContent value="insurances" className="mt-4">
            <Insurances />
          </TabsContent>
          <TabsContent value="clinics" className="mt-4">
            <Clinics />
          </TabsContent>
          <TabsContent value="business-hours" className="mt-4">
            <BusinessHours />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProfileSettingsPageView;
