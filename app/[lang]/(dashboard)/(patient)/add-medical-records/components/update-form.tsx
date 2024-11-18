"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import FileUploaderRestrictions from "@/components/file-upload-reactions";
import InputComponent from "@/components/InputComponent";
import SelectInput from "@/components/SelectInpu";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Edit } from "lucide-react";
import { useState } from "react";
import LanguageForm from "../../../(doctor)/profile-settings/components/submit-input";

// Define schema using zod
const formSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters."),
  patient: z.number().min(2, "Select patient."),
  startDate: z.string().min(1, "Date  is required."),

  hospitalName: z.string().min(2, "hospitalName is required."),
  symptoms: z.array(z.string()).min(1, "Symptoms are required."),
});

type MedicalRecordsUpdateFormProps = {
  edit?: boolean;
};

export function MedicalRecordsUpdateForm({
  edit = false,
}: MedicalRecordsUpdateFormProps) {
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
      title: "Title",
      patient: 1,
      startDate: "2011/12/01",
      hospitalName: "Female",
      symptoms: ["Female", "dd"],
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
        <Edit
          className="border dark:border dark:border-gray-700 p-2 rounded-full shadow-lg hover:bg-blue-500 hover:text-white cursor-pointer"
          size={32}
        />
      </DialogTrigger>
      <DialogContent className="w-full max-w-xl p-6  ">
        <ScrollArea className="h-[75vh] pr-4">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <DialogHeader>
              <DialogDescription></DialogDescription>
              <DialogTitle></DialogTitle>
            </DialogHeader>
            <InputComponent
              name="title"
              label="Title"
              isRequired
              control={control}
              error={errors.title?.message}
            />
            <SelectInput
              name="patient"
              className="w-full"
              control={control}
              label="Patient"
              options={gender}
              placeholder="Select Patient  "
              isRequired
              color="primary"
              valueType="id"
              error={errors?.patient?.message}
            />
            <InputComponent
              name="startDate"
              label=" Star Date "
              isRequired
              type="date"
              control={control}
              error={errors.startDate?.message}
            />
            <Controller
              control={control}
              name="symptoms"
              render={({ field: { value, onChange } }) => (
                <LanguageForm
                  languages={value}
                  placeholder="Type new"
                  setLanguages={(newLanguages) => {
                    onChange(newLanguages);
                  }}
                  error={errors.symptoms?.message}
                />
              )}
            />
            <div>
              <Label>Reports</Label>
              <FileUploaderRestrictions />
            </div>
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
