"use client";
import ImageComponent from "@/components/ImageComponent";
import InputComponent from "@/components/InputComponent";
import FileInput from "@/components/shared/FileInput";
import { Button } from "@/components/ui/button";
import avatar from "@/public/images/avatar/avatar-13.jpg";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const InsuranceSchema = z.object({
  insuranceName: z.string().nonempty("Insurance name is required"),
});

type formData = z.infer<typeof InsuranceSchema>;

function Insurance() {
  const [images, setImages] = useState<string[]>([]);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<formData>({
    resolver: zodResolver(InsuranceSchema),
    defaultValues: {
      insuranceName: "",
    },
  });

  const onSubmit: SubmitHandler<formData> = (data) => {
    console.log("Form Data:", data); // This logs the form data to the console
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="Insurance-section border p-4 mb-4 rounded-lg shadow space-y-4">
        <div>
          <h1 className="text-lg py-2">Insurance</h1>
          <div className="border p-4 rounded-md flex gap-4 bg-primary/10">
            <div className="w-24 h-24 rounded-md overflow-hidden">
              <ImageComponent src={images[0] || avatar} alt="Profile Image" />
            </div>
            <FileInput
              images={images}
              setImages={setImages}
              label="Insurance Image"
              maxFiles={1}
            />
          </div>
        </div>

        <InputComponent
          name="InsuranceName"
          control={control}
          label=" Insurance Name"
          placeholder="Enter Title"
          isRequired
          error={errors.insuranceName?.message}
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

export default Insurance;
