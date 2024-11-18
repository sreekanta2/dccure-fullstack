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

    address: z.string().nonempty("Address is required"),
    city: z.string().nonempty("City is required"),
    state: z.string().nonempty("State is required"),
    zipCode: z.string().nonempty("Zip code is required"),
    country: z.string().nonempty("Country is required"),
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
      languages: [],
      address: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
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

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Information Section */}
        <div>
          <h1 className="text-lg py-2">Information</h1>
          <div className="bg-primary/10 p-4 rounded-md">
            <div className="space-y-4">
              <div className="w-full flex flex-col   md:flex-row gap-4 items-center">
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
              <div className="w-full flex flex-col   md:flex-row gap-4 items-center">
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
            </div>
          </div>
        </div>
        {/* address Section */}
        <div>
          <h1 className="text-lg py-2">address</h1>
          <div className="bg-primary/10 p-4 rounded-md">
            <div className="space-y-4">
              <div className="w-full flex flex-col   md:flex-row gap-4 items-center">
                <InputComponent
                  name="address"
                  control={control}
                  label="Address"
                  placeholder="Enter your Address"
                  error={errors.address?.message}
                  isRequired
                />
                <InputComponent
                  name="city"
                  control={control}
                  label="City"
                  placeholder="Enter your City"
                  error={errors.city?.message}
                  isRequired
                />
              </div>
              <div className="w-full flex flex-col   md:flex-row gap-4 items-center">
                <InputComponent
                  name="state"
                  control={control}
                  label="State"
                  placeholder="Enter your State"
                  error={errors.state?.message}
                  isRequired
                />
                <InputComponent
                  name="country"
                  control={control}
                  label="Country "
                  error={errors.country?.message}
                  isRequired
                />
                <InputComponent
                  name="zipCode"
                  control={control}
                  label="Zip code "
                  error={errors.zipCode?.message}
                  isRequired
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
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
        </div>
      </form>
    </div>
  );
}
