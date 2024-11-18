import RequestPatient from "./components/RequestPatient";

interface DashboardPageViewProps {
  trans: {
    [key: string]: string;
  };
}
const RequestPageView = ({ trans }: DashboardPageViewProps) => {
  return (
    <div className="space-y-6 mb-8">
      <RequestPatient />
    </div>
  );
};

export default RequestPageView;
