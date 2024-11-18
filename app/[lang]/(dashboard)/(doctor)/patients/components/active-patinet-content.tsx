import { TabsContent } from "@/components/ui/tabs";
import AppointmentCard from "./patients-card";

export default function ActivePatientsContent() {
  return (
    <TabsContent value="active">
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
