"use client";

import InputComponent from "@/components/InputComponent";
import SelectInput from "@/components/SelectInpu";
// Fixed typo here
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";

interface SocialMediaViewProps {
  trans: {
    [key: string]: string;
  };
}

// Define the Zod schema for validation
const formSchema = z.object({
  socialMedia: z.array(
    z.object({
      name: z.string().min(1, { message: "Select social media" }),
      url: z
        .string()
        .min(1, { message: "Enter your profile URL" })
        .url({ message: "Invalid URL format" }),
    })
  ),
});

type FormData = z.infer<typeof formSchema>;

const socialMediaOptions = [
  { id: 1, label: "Facebook" },
  { id: 2, label: "LinkedIn" },
  { id: 3, label: "Instagram" },
];

const SocialMediaPageView = ({ trans }: SocialMediaViewProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      socialMedia: [{ name: "", url: "" }], // Aligned default values
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "socialMedia",
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    // You can handle form submission here, e.g., send data to an API
  };

  const addNewItem = () => {
    append({ name: "", url: "" });
  };

  return (
    <div className="space-y-6 mb-8  bg-card p-6 rounded-md">
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field, index) => (
          <div className="  border-b py-4 " key={field.id}>
            <div className="flex gap-4 flex-wrap md:flex-nowrap items-center w-full">
              <SelectInput
                name={`socialMedia.${index}.name`}
                control={control}
                label="Social Media"
                options={socialMediaOptions}
                placeholder="Select a platform"
                error={errors.socialMedia?.[index]?.name?.message}
                isRequired={true}
                className="w-72"
                color="primary"
              />

              <InputComponent
                name={`socialMedia.${index}.url`}
                control={control}
                label="Profile URL"
                placeholder="Enter your profile URL"
                error={errors.socialMedia?.[index]?.url?.message}
                type="url"
                isRequired={true}
                className="w-full h-10"
                color="primary"
              />

              <button
                type="button"
                onClick={() => remove(index)} // Remove current item
                className="text-destructive  mt-4  "
              >
                Remove
              </button>
            </div>
          </div>
        ))}

        <div className=" flex items-center gap-4 justify-end mt-4">
          <Button
            variant="soft"
            color="default"
            type="button"
            onClick={addNewItem}
          >
            Add New
          </Button>

          <Button variant="soft" color="default" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SocialMediaPageView;
