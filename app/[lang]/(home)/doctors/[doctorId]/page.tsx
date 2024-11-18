import Availability from "./components/availability";
import Awards from "./components/awards";
import BusinessOur from "./components/business-hour";
import ClinicLocation from "./components/clinics-locatin";
import DoctorBio from "./components/doctor-bio";
import Experience from "./components/experience";
import DoctorHero from "./components/hero";
import Insurances from "./components/insurances";
import ProfileHashTag from "./components/profile-hash-nav";
import ProfileHeader from "./components/profile-header";
import ReviewPage from "./components/review-page";
import Specialty from "./components/specialty";
import Treatment from "./components/treatment";

export default function DoctorPage({
  params,
}: {
  params: { doctorId: string };
}) {
  const { doctorId } = params;

  return (
    <>
      <DoctorHero doctorId={doctorId} />
      <div className="bg-background">
        <div className="max-w-7xl mx-auto space-y-8 pb-8 px-6   ">
          <ProfileHeader doctorId={doctorId} />
          <ProfileHashTag doctorId={doctorId} />
          <DoctorBio />
          <Experience />
          <Insurances />
          <Specialty />
          <Treatment />
          <Availability />
          <ClinicLocation />
          <Awards />
          <BusinessOur />
          <ReviewPage />
        </div>
      </div>
    </>
  );
}
