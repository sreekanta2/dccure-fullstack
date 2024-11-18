import DoctorAppointments from "./components/doctor-appointments";

interface AppointmentsPageViewProps {
  trans: {
    [key: string]: string;
  };
}
const AppointmentsPageView = ({ trans }: AppointmentsPageViewProps) => {
  return (
    <div className="space-y-6 mb-8">
      <DoctorAppointments />
    </div>
  );
};

export default AppointmentsPageView;
