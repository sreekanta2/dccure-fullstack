import { Badge } from "@/components/ui/badge";

const specialties = [
  "Orthopedic Consultation",
  "Delivery Blocks",
  "Ultrasound Injection",
  "Tooth Bleaching",
  "Cosmetic",
];

export default function Treatment() {
  return (
    <div className="space-y-1" id="treatments">
      <h1 className="text-lg">Services & Pricing</h1>
      <div className=" flex gap-4 flex-wrap">
        {specialties.map((specialty, index) => (
          <Badge
            key={index}
            variant="soft"
            className="px-4 py-2 rounded-md flex item-center gap-4"
          >
            {specialty}
            <span>${300}</span>
          </Badge>
        ))}
      </div>
    </div>
  );
}
