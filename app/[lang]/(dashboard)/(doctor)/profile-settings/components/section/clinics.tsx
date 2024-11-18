"use client";
import FileUploaderRestrictions from "@/components/file-upload-reactions";
import ImageComponent from "@/components/ImageComponent";
import InputComponent from "@/components/InputComponent";
import FileInput from "@/components/shared/FileInput";
import { Button } from "@/components/ui/button";
import avatar from "@/public/images/avatar/avatar-13.jpg";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const ClinicSchema = z.object({
  clinicName: z.string().nonempty("Title is required"),

  location: z.string().nonempty(" Description is required"),
  address: z.string().nonempty(" Description is required"),
});

type formData = z.infer<typeof ClinicSchema>;

function Clinic() {
  const [images, setImages] = useState<string[]>([]);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<formData>({
    resolver: zodResolver(ClinicSchema),
    defaultValues: {
      clinicName: "",

      address: "",
      location: "",
    },
  });

  const onSubmit: SubmitHandler<formData> = (data) => {
    console.log("Form Data:", data); // This logs the form data to the console
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="Clinic-section border p-4 mb-4 rounded-lg shadow space-y-4">
        <div>
          <h1 className="text-lg py-2">Clinic</h1>
          <div className="border p-4 rounded-md flex gap-4 bg-primary/10">
            <div className="w-24 h-24 rounded-md overflow-hidden">
              <ImageComponent src={images[0] || avatar} alt="Profile Image" />
            </div>
            <FileInput
              images={images}
              setImages={setImages}
              label="Clinic Image"
              maxFiles={1}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start gap-4">
          <InputComponent
            name="clinicName"
            control={control}
            label=" Clinic Name"
            placeholder="Enter Title"
            isRequired
            error={errors.clinicName?.message}
          />
          <InputComponent
            name="location"
            control={control}
            label="  Location"
            placeholder="Enter location"
            type="number"
            isRequired
            error={errors.location?.message}
            className="h-10"
          />
          <InputComponent
            name="address"
            control={control}
            label="  Address"
            placeholder="Enter address"
            type="text"
            isRequired
            error={errors.address?.message}
            className="h-10"
          />
        </div>
      </div>
      <FileUploaderRestrictions />
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

export default Clinic;
