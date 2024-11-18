import { TabsContent } from "@/components/ui/tabs";
import AppointmentCard from "./patients-card";

export default function InActivePatientContent() {
  return (
    <TabsContent value="inactive">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 ">
        <AppointmentCard />
        <AppointmentCard />
        <AppointmentCard />
        <AppointmentCard />
        <AppointmentCard />
        <AppointmentCard />
        <AppointmentCard />
        <AppointmentCard />
        <AppointmentCard />
        <AppointmentCard />
        <AppointmentCard />
        <AppointmentCard />
      </div>
    </TabsContent>
  );
}
