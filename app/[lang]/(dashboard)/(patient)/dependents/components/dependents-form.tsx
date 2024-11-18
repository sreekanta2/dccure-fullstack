"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import ImageComponent from "@/components/ImageComponent";
import InputComponent from "@/components/InputComponent";
import SelectInput from "@/components/SelectInpu";
import FileInput from "@/components/shared/FileInput";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { avatar } from "@/config/user.config";
import { Edit } from "lucide-react";
import { useState } from "react";

// Define schema using zod
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  relationship: z
    .string()
    .min(2, "Relationship must be at least 2 characters."),
  dob: z.string().min(1, "Date of birth is required."),

  gender: z.string().min(2, "Gender is required."),
});

type DependentsFormProps = {
  edit?: boolean;
};

export function DependentsForm({ edit = false }: DependentsFormProps) {
  // State to hold the image preview URL
  const [images, setImages] = useState<string[]>([]);
  // Initialize form with react-hook-form and zod
  type FormData = z.infer<typeof formSchema>;

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "Jhon",
      relationship: "sibling",
      dob: "2024-11-20",
      gender: "Female",
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };
  const gender = [
    { id: 1, label: "Male" },
    { id: 2, label: "Female" },
    { id: 3, label: "Other" },
  ];
  return (
    <Dialog>
      <DialogTrigger asChild>
        {!edit ? (
          <Button variant="soft">Add Dependents</Button>
        ) : (
          <Edit
            className="border dark:border dark:border-gray-700 p-2 rounded-full shadow-lg hover:bg-blue-500 hover:text-white cursor-pointer"
            size={32}
          />
        )}
      </DialogTrigger>
      <DialogContent className="w-full max-w-xl p-6  ">
        <ScrollArea className="h-[75vh] pr-4">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <DialogHeader>
              <div className="border w-full p-2 rounded-md flex gap-4 bg-primary/10">
                <div className="w-24 h-24 rounded-md overflow-hidden">
                  <ImageComponent
                    src={images[0] || avatar}
                    alt="Profile Image"
                  />
                </div>
                <FileInput
                  images={images}
                  setImages={setImages}
                  label="Profile Image"
                  maxFiles={1}
                />
              </div>
              <DialogDescription></DialogDescription>
            </DialogHeader>
            <InputComponent
              name="name"
              label="Name"
              isRequired
              control={control}
              error={errors.name?.message}
            />
            <InputComponent
              name="relationship"
              label="Relationship"
              isRequired
              control={control}
              error={errors.relationship?.message}
            />

            <InputComponent
              name="dob"
              label="Date of Birth"
              isRequired
              type="date"
              control={control}
              error={errors.dob?.message}
            />
            <SelectInput
              name="gender"
              className="w-full"
              control={control}
              label="gender"
              options={gender}
              placeholder="Select gender  "
              isRequired
              valueType="label"
              color="primary"
              error={errors?.gender?.message}
            />

            {/* Submit Button */}
            <div className="w-full flex justify-between gap-4">
              <Button type="submit" variant="soft" className="w-full">
                Submit
              </Button>
              <Button
                variant="soft"
                color="destructive"
                type="button"
                onClick={() => reset()}
                className="w-full"
              >
                Reset
              </Button>
            </div>
          </form>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
