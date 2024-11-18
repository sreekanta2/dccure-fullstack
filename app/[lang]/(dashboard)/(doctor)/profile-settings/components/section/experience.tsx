"use client";
import TextareaFormField from "@/components/FormField";
import ImageComponent from "@/components/ImageComponent";
import InputComponent from "@/components/InputComponent";
import CheckboxFormField from "@/components/react-hooks-components/checkbox-form-field";
import SelectInput from "@/components/SelectInpu";
import FileInput from "@/components/shared/FileInput";
import { DatePicker } from "@/components/single-date-picker";
import { Button } from "@/components/ui/button";
import avatar from "@/public/images/avatar/avatar-13.jpg";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const experienceSchema = z.object({
  title: z.string().nonempty("Title is required"),
  hospital: z.string().nonempty("Hospital is required"),
  yearsOfExperience: z
    .number()
    .min(0, "Year of experience is required positive number"),
  location: z.string().nonempty("Location is required"),
  employment: z.string().nonempty("Employment type is required"),
  jobDescription: z.string().nonempty("Job description is required"),
  startDate: z.date({
    message: "Start date is required",
  }),
  endDate: z.date().optional(),
  currentlyWorking: z.boolean(),
});

type formData = z.infer<typeof experienceSchema>;

function ExperienceForm() {
  const [images, setImages] = useState<string[]>([]);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<formData>({
    resolver: zodResolver(experienceSchema),
    defaultValues: {
      title: "",
      hospital: "",
      yearsOfExperience: 0,
      location: "",
      employment: "",
      jobDescription: "",
      startDate: undefined,
      endDate: undefined,
      currentlyWorking: false,
    },
  });

  const onSubmit: SubmitHandler<formData> = (data) => {
    console.log("Form Data:", data); // This logs the form data to the console
  };
  const employmentType = [
    { id: 1, label: "Full Time" },
    { id: 2, label: "Part Time" },
  ];
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="experience-section border p-4 mb-4 rounded-lg shadow space-y-4">
        <div>
          <h1 className="text-lg py-2">Hospital</h1>
          <div className="border p-4 rounded-md flex gap-4 bg-primary/10">
            <div className="w-24 h-24 rounded-md overflow-hidden">
              <ImageComponent src={images[0] || avatar} alt="Profile Image" />
            </div>
            <FileInput
              images={images}
              setImages={setImages}
              label="Hospital Image"
              maxFiles={1}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start gap-4">
          <InputComponent
            name="title"
            control={control}
            label="Title"
            placeholder="Enter Title"
            isRequired
            error={errors.title?.message}
          />

          <InputComponent
            name="hospital"
            control={control}
            label="Hospital"
            placeholder="Enter Hospital Name"
            isRequired
            error={errors.hospital?.message}
          />

          <InputComponent
            name="yearsOfExperience"
            control={control}
            label="Years of Experience"
            placeholder="Enter Years of Experience"
            type="number"
            isRequired
            error={errors.yearsOfExperience?.message}
          />
        </div>

        <div className="flex flex-col md:flex-row items-start gap-4">
          <InputComponent
            name="location"
            control={control}
            label="Location"
            placeholder="Enter Location"
            isRequired
            error={errors.location?.message}
          />

          <SelectInput
            name="employment"
            className="w-full"
            control={control}
            label="Employment Type"
            options={employmentType}
            placeholder="Select Employment Type"
            isRequired
            valueType="label"
            color="primary"
            error={errors?.employment?.message}
          />
        </div>

        <TextareaFormField
          name="jobDescription"
          control={control}
          label="Description"
          placeholder="Enter your description"
          error={errors.jobDescription?.message}
          isRequired={true}
          color="primary"
          variant="bordered"
          radius="md"
          shadow="sm"
        />

        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <DatePicker
            name="startDate"
            control={control}
            error={errors?.startDate?.message}
            label="Start Date"
            isRequired={true}
          />
          <DatePicker
            name="endDate"
            control={control}
            error={errors?.endDate?.message}
            label="End Date"
            isRequired={false}
          />
          <CheckboxFormField
            name="currentlyWorking"
            control={control}
            label="Currently Working"
            className="md:mt-5"
            radius="full"
            error={errors.currentlyWorking?.message}
          />
        </div>
      </div>

      <div className="flex gap-4 mt-6">
        <Button
          variant="soft"
          color="destructive"
          type="button"
          onClick={() => reset()}
        >
          Reset
        </Button>
        <Button variant="soft" type="submit" color="info">
          Save Changes
        </Button>
      </div>
    </form>
  );
}

export default ExperienceForm;
