import DoctorPatients from "./components/doctor-patients";

interface PatientsPageViewProps {
  trans: {
    [key: string]: string;
  };
}
const PatientsPageView = ({ trans }: PatientsPageViewProps) => {
  return (
    <div className="space-y-6 mb-8">
      <DoctorPatients />
    </div>
  );
};

export default PatientsPageView;
