"use client";

import ImageComponent from "@/components/ImageComponent";
import InputComponent from "@/components/InputComponent";
import FileInput from "@/components/shared/FileInput";
import { Button } from "@/components/ui/button";
import avatar from "@/public/images/avatar/avatar-13.jpg";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import LanguageForm from "../submit-input";

export default function BasicDetails() {
  const [images, setImages] = useState<string[]>([]);

  // Schema definition for form validation
  const formSchema = z.object({
    firstName: z.string().nonempty("First name is required"),
    lastName: z.string().nonempty("Last name is required"),
    displayName: z.string().nonempty("Display name is required"),
    designation: z.string().nonempty("Designation is required"),
    phoneNumber: z.string().nonempty("Phone number is required"),
    email: z
      .string()
      .email("Invalid email format")
      .nonempty("Email is required"),
    languages: z
      .array(z.string())
      .nonempty("Please add at least one language")
      .max(5, "You can only add up to 5 languages"),
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
      firstName: "",
      lastName: "",
      displayName: "",
      designation: "",
      phoneNumber: "",
      email: "",
      languages: [], // Initialize as an empty array
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <div className="space-y-6">
      {/* Profile Section */}
      <div>
        <h1 className="text-lg py-2">Profile</h1>
        <div className="border p-4 rounded-md flex gap-4 bg-primary/10">
          <div className="w-24 h-24 rounded-md overflow-hidden">
            <ImageComponent src={images[0] || avatar} alt="Profile Image" />
          </div>
          <FileInput
            images={images}
            setImages={setImages}
            label="Profile Image"
            maxFiles={1}
          />
        </div>
      </div>

      {/* Information Section */}
      <div>
        <h1 className="text-lg py-2">Information</h1>
        <div className="bg-primary/10 p-4 rounded-md">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="w-full md:flex gap-4 items-center">
              <InputComponent
                name="firstName"
                control={control}
                label="First Name"
                placeholder="Enter your first name"
                error={errors.firstName?.message}
                isRequired
              />
              <InputComponent
                name="lastName"
                control={control}
                label="Last Name"
                placeholder="Enter your last name"
                error={errors.lastName?.message}
                isRequired
              />
              <InputComponent
                name="displayName"
                control={control}
                label="Display Name"
                placeholder="Enter your display name"
                error={errors.displayName?.message}
                isRequired
              />
            </div>
            <div className="w-full md:flex gap-4 items-center">
              <InputComponent
                name="designation"
                control={control}
                label="Designation"
                placeholder="Enter your designation"
                error={errors.designation?.message}
                isRequired
              />
              <InputComponent
                name="phoneNumber"
                control={control}
                label="Phone Number"
                placeholder="Enter your phone number"
                error={errors.phoneNumber?.message}
                isRequired
              />
              <InputComponent
                name="email"
                control={control}
                label="Email"
                placeholder="Enter your email"
                error={errors.email?.message}
                isRequired
              />
            </div>

            {/* Language Form */}
            <Controller
              control={control}
              name="languages"
              render={({ field: { value, onChange } }) => (
                <LanguageForm
                  languages={value}
                  setLanguages={(newLanguages) => {
                    onChange(newLanguages);
                  }}
                  error={errors.languages?.message}
                />
              )}
            />

            <Button type="submit" variant="soft" size="lg">
              Submit
            </Button>
            <Button
              variant="soft"
              color="destructive"
              type="button"
              onClick={() => reset()}
            >
              Reset
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
