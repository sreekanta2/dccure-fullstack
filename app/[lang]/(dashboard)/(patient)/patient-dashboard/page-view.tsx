import AppointmentCard from "./_components/appointment-card";
import CalendarSlider from "./_components/appointment-slider";
import DependentsCard from "./_components/dependents-card";
import HealthRecords from "./_components/health-records";
import PatientReports from "./_components/reports/patient-reports";

interface DashboardPageViewProps {
  trans: {
    [key: string]: string;
  };
}
const DashboardPageView = ({ trans }: DashboardPageViewProps) => {
  return (
    <div className="space-y-6 mb-8 bg-card p-6 rounded-md">
      <div className="text-2xl font-medium text-default-800 ">
        Analytics {trans?.dashboard}
      </div>

      {/* heath records */}
      <HealthRecords />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-4 border p-4 rounded-md">
          <CalendarSlider />
          <div className="space-y-2">
            <AppointmentCard />
            <AppointmentCard />
          </div>
        </div>

        <div className="col-span-2">
          <DependentsCard />
        </div>
      </div>

      <div>
        <PatientReports />
      </div>
    </div>
  );
};

export default DashboardPageView;
