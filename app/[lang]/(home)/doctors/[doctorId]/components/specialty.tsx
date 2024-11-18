import { Badge } from "@/components/ui/badge";

const specialties = [
  "Orthopedic Consultation",
  "Delivery Blocks",
  "Ultrasound Injection",
  "Tooth Bleaching",
  "Cosmetic",
];

export default function Specialty() {
  return (
    <div className="space-y-1" id="specialty">
      <h1 className="text-lg">Specialty</h1>
      <div className="  flex gap-4 flex-wrap">
        {specialties.map((specialty, index) => (
          <Badge key={index} variant="soft" className="px-4 py-2 rounded-md">
            {specialty}
          </Badge>
        ))}
      </div>
    </div>
  );
}
