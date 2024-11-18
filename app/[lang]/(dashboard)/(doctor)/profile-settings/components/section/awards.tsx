"use client";
import TextareaFormField from "@/components/FormField";
import ImageComponent from "@/components/ImageComponent";
import InputComponent from "@/components/InputComponent";
import FileInput from "@/components/shared/FileInput";
import { Button } from "@/components/ui/button";
import avatar from "@/public/images/avatar/avatar-13.jpg";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const AwardsSchema = z.object({
  awardName: z.string().nonempty("Title is required"),

  noOfYear: z.number().min(0, "Location is required"),

  description: z.string().nonempty(" Description is required"),
  startDate: z.date({
    message: "Start date is required",
  }),
});

type formData = z.infer<typeof AwardsSchema>;

function Awards() {
  const [images, setImages] = useState<string[]>([]);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<formData>({
    resolver: zodResolver(AwardsSchema),
    defaultValues: {
      awardName: "",

      noOfYear: 0,
      description: "",

      startDate: undefined,
    },
  });

  const onSubmit: SubmitHandler<formData> = (data) => {
    console.log("Form Data:", data); // This logs the form data to the console
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="Awards-section border p-4 mb-4 rounded-lg shadow space-y-4">
        <div>
          <h1 className="text-lg py-2">Awards</h1>
          <div className="border p-4 rounded-md flex gap-4 bg-primary/10">
            <div className="w-24 h-24 rounded-md overflow-hidden">
              <ImageComponent src={images[0] || avatar} alt="Profile Image" />
            </div>
            <FileInput
              images={images}
              setImages={setImages}
              label="Awards Image"
              maxFiles={1}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start gap-4">
          <InputComponent
            name="awardName"
            control={control}
            label=" Award Name"
            placeholder="Enter Title"
            isRequired
            error={errors.awardName?.message}
          />
          <InputComponent
            name="noOfYear"
            control={control}
            label="  Year"
            placeholder="Enter Years of Awards"
            type="number"
            isRequired
            error={errors.noOfYear?.message}
            className="h-10"
          />
        </div>

        <TextareaFormField
          name="description"
          control={control}
          label="Description"
          placeholder="Enter your description"
          error={errors.description?.message}
          isRequired={true}
          color="primary"
          variant="bordered"
          radius="md"
          shadow="sm"
        />
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

export default Awards;
