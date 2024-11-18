import { MoveRight } from "lucide-react";

export default function Specialites() {
  const specialties = [
    { name: "Urology", count: 21, icon: "🩺" },
    { name: "Orthopedic", count: 30, icon: "💪" },
    { name: "Cardiologist", count: 15, icon: "❤️" },
    { name: "Dentist", count: 35, icon: "🦷" },
    { name: "Neurology", count: 25, icon: "🧠" },
    { name: "Pediatrist", count: 10, icon: "👶" },
    { name: "Veterinary", count: 20, icon: "🐾" },
    { name: "Psychiatrist", count: 12, icon: "🧠" },
  ];

  return (
    <section
      className="bg-[url(https://i.ibb.co.com/WnWb720/shape-3.png)] bg-[#193a85]  bg-no-repeat relative "
      id="home"
    >
      <div className="max-w-7xl mx-auto px-6 py-14 lg:px-0 lg:h-[70vh]">
        <h2 className="text-white text-3xl font-semibold mb-2">
          Browse by Specialties
        </h2>
        <p className="text-white mb-8">
          Find experienced doctors across all specialties
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {specialties.map((specialty, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group cursor-pointer"
            >
              <div className="flex items-center space-x-4">
                <span className="text-3xl transition-transform duration-500 transform group-hover:rotate-180">
                  {specialty.icon}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {specialty.name}
                  </h3>
                  <p className="text-gray-600">{specialty.count} Doctors</p>
                </div>
              </div>
              <MoveRight className="text-blue-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
