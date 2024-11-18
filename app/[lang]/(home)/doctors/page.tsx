import DoctorFilteringPage from "./components/doctors-filtering-page";
import DoctorsHero from "./components/hero";

export default function Doctor({ params }: { params: { doctorId: string } }) {
  return (
    <div className="bg-background">
      <DoctorsHero />
      <DoctorFilteringPage />
    </div>
  );
}
