import { Button } from "@/components/ui/button";
import Link from "next/link";

const hashLinks = [
  { label: "Doctor Bio", id: "bio" },
  { label: "Experience", id: "experience" },
  { label: "Insurances", id: "insurances" },
  { label: "Specialty", id: "specialty" },
  { label: "Treatments", id: "treatments" },
  { label: "Availability", id: "availability" },
  { label: "Clinics", id: "clinics" },
  { label: "Memberships", id: "memberships" },
  { label: "Awards", id: "awards" },
  { label: "Business Hours", id: "business-hours" },
  { label: "Review", id: "review" },
];

export default function ProfileHashTag({ doctorId }: { doctorId: string }) {
  return (
    <div className="flex flex-wrap gap-2">
      {hashLinks.map((link) => (
        <Button key={link.id} variant="soft">
          <Link href={`/doctors/${doctorId}#${link.id}`}>{link.label}</Link>
        </Button>
      ))}
    </div>
  );
}
