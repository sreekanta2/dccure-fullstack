"use client";
import { useState } from "react";

export default function DoctorBio() {
  const [isExpanded, setIsExpanded] = useState(false);

  const bio = `Highly motivated and experienced doctor with a passion for providing excellent care to patients. Experienced in a wide variety of medical settings, with particular expertise in diagnostics, primary care and emergency medicine. Skilled in using the latest technology to streamline patient care. Committed to delivering compassionate, personalized care to each and every patient.`;

  const maxLength = 200;

  const toggleExpansion = () => {
    setIsExpanded((prev) => !prev);
  };

  const displayText = isExpanded
    ? bio
    : `${bio.slice(0, maxLength)}${bio.length > maxLength ? "..." : ""}`;

  return (
    <p id="bio" className="">
      {displayText}
      {bio.length > maxLength && (
        <button
          onClick={toggleExpansion}
          className={`text-blue-500 hover:underline ${
            !isExpanded ? "ml-2" : ""
          } `}
        >
          {isExpanded ? "Show Less" : "Show More"}
        </button>
      )}
    </p>
  );
}
