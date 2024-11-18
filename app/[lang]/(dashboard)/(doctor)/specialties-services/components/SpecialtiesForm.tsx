"use client";

import InputComponent from "@/components/InputComponent";
import SelectInput from "@/components/SelectInpu";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";

// Define the Zod schema for validation
const formSchema = z.object({
  specialties: z.array(
    z.object({
      price: z.number().min(1, { message: "Price is required" }),
      specialty: z.number().min(1, { message: "Please select a specialty" }),
      service: z.number().min(1, { message: "Please select a service" }),
      description: z.string().min(1, { message: "Description is required" }),
    })
  ),
});

type FormData = z.infer<typeof formSchema>;

const specialties = [
  { id: 1, label: "Cardiology" },
  { id: 2, label: "Dermatology" },
  { id: 3, label: "Pediatrics" },
];

const services = [
  { id: 1, label: "Pediatric" },
  { id: 2, label: "Cardiology" },
  { id: 3, label: "Dermatology" },
];

export default function SpecialtiesServiceForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      specialties: [{ price: 0, specialty: 0, service: 0, description: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "specialties",
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  const addNewItem = () => {
    append({ price: 0, specialty: 0, service: 0, description: "" });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field, index) => (
        <div className="space-y-6 border-b pb-4 my-4 last:border-0" key={index}>
          <SelectInput
            name={`specialties.${index}.specialty`}
            control={control}
            label="Specialty"
            options={specialties}
            placeholder="Select a specialty"
            error={errors.specialties?.[index]?.specialty?.message}
            isRequired={true}
            color="primary"
            className="w-1/3"
          />
          <div key={field.id} className=" flex gap-4 flex-wrap ">
            <SelectInput
              name={`specialties.${index}.service`}
              control={control}
              label="Service"
              options={services}
              placeholder="Select a service"
              error={errors.specialties?.[index]?.service?.message}
              isRequired={false}
              className="w-full md:w-fit"
              color="primary"
            />

            <InputComponent
              name={`specialties.${index}.price`}
              control={control}
              label="Price"
              placeholder="Enter price"
              error={errors.specialties?.[index]?.price?.message}
              type="number"
              isRequired={true}
              className="w-full md:w-fit"
              color="primary"
            />

            <InputComponent
              name={`specialties.${index}.description`}
              control={control}
              label="Description"
              placeholder="Enter description"
              error={errors.specialties?.[index]?.description?.message}
              isRequired={true}
              className="w-full md:w-fit"
              color="primary"
            />

            <button
              type="button"
              onClick={() => remove(index)} // Remove current item
              className="text-red-500"
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <div className=" flex items-center mt-4  gap-4 justify-end">
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
  );
}
