import SpecialtiesServiceForm from "./components/SpecialtiesForm";

export default function SpecialtiesServicePageView() {
  return (
    <div className="space-y-6 bg-card mb-8 p-6 rounded-md">
      <h1 className="text-xl font-semibold">Specialty & Services</h1>
      <hr className="my-4" />
      <div className="border p-6 rounded-md">
        <SpecialtiesServiceForm />
      </div>
    </div>
  );
}
