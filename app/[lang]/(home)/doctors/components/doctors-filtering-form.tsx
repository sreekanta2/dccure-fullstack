"use client";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Rating } from "@/components/ui/rating";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import AccordionFilterItem from "./filter-accroddian";

// Define the filter options
const availabilityOptions = [
  "today",
  "nextday",
  "next7days",
  "next30days",
] as const;
const availabilityOptionsMutable: string[] = [...availabilityOptions];

const specialties = ["urology", "ophthalmology", "cardiology"] as const;
const specialtiesMutable: string[] = [...specialties];

const experienceOptions = ["1", "5", "5+"] as const;
const experienceOptionsMutable: string[] = [...experienceOptions];
const onlineConsultationOptions = ["audio", "video", "chat"] as const;
const offlineConsultationOptionsMutable: string[] = [
  ...onlineConsultationOptions,
];

const languages = ["english", "bangla", "spanish"] as const;
const languagesMutable: string[] = [...languages];
const ratingOptions = ["1", "2", "3", "4", "5"] as const;
const ratingOptionsMutable: string[] = [...ratingOptions];

export default function DoctorFilteringPageForm() {
  const formSchema = z.object({
    gender: z.enum(["male", "female"]).optional(),
    availability: z.enum(availabilityOptions).optional(), // Single value
    specialties: z.enum(specialties).array().optional(),
    experience: z.enum(experienceOptions).optional(),
    onlineConsultation: z.enum(onlineConsultationOptions).array().optional(),
    languages: z.enum(languages).array().optional(),
    rating: z.enum(ratingOptions).optional(),
  });

  type FormData = z.infer<typeof formSchema>;

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      gender: undefined,
      availability: undefined,
      specialties: [],
      experience: undefined,
      onlineConsultation: [],
      rating: undefined,
      languages: [],
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Form Data Submitted:", data);
    console.log(errors);
  };

  return (
    <Accordion
      type="multiple"
      defaultValue={[
        "gender",
        "rating",
        "availability",
        "specialties",
        "onlineConsultation",
        "languages",
      ]}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Gender */}
        <AccordionFilterItem
          label="Gender"
          name="gender"
          options={["male", "female"]}
          control={control}
          optionLabelMap={(gender) =>
            gender.charAt(0).toUpperCase() + gender.slice(1)
          }
        />

        {/* Availability */}
        {/* Availability */}
        <AccordionFilterItem
          label="Availability"
          name="availability"
          options={availabilityOptionsMutable}
          control={control}
          optionLabelMap={(option) =>
            option
              .replace("next", "Next ")
              .replace("day", " Day")
              .replace("days", " Days")
              .replace("to", " To")
          }
        />

        {/* Specialties */}
        <AccordionFilterItem
          label="Specialties"
          name="specialties"
          options={specialtiesMutable}
          control={control}
          optionLabelMap={(specialty) =>
            specialty.charAt(0).toUpperCase() + specialty.slice(1)
          }
        />

        {/* Experience */}
        <AccordionFilterItem
          label="Experience"
          name="experience"
          options={experienceOptionsMutable}
          control={control}
          optionLabelMap={(experience) =>
            experience === "5+" ? "5+ Years" : `${experience} Years`
          }
        />

        {/* Online Consultation */}
        <AccordionFilterItem
          label="Online Consultation"
          name="onlineConsultation"
          options={offlineConsultationOptionsMutable}
          optionLabelMap={(offlineConsultationOptions) =>
            offlineConsultationOptions.charAt(0).toUpperCase() +
            offlineConsultationOptions.slice(1)
          }
          control={control}
        />

        {/* Rating */}
        <AccordionFilterItem
          label="By Rating"
          name="rating"
          options={ratingOptionsMutable.map((rating) => rating)} // Pass raw rating values for validation
          control={control}
          renderOption={(rating: string) => (
            <Rating
              key={rating}
              value={parseInt(rating)}
              readOnly
              className="gap-x-1.5 max-w-[125px]"
            />
          )}
        />

        {/* Languages */}
        <AccordionFilterItem
          label="Languages"
          name="languages"
          options={languagesMutable}
          optionLabelMap={(languages) =>
            languages.charAt(0).toUpperCase() + languages.slice(1)
          }
          control={control}
        />

        {/* Submit and Reset Buttons */}
        <div className="flex space-x-2">
          <Button type="submit">Submit</Button>
          <Button type="button" onClick={() => reset()}>
            Reset
          </Button>
        </div>
      </form>
    </Accordion>
  );
}
