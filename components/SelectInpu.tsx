"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Controller } from "react-hook-form";

interface SelectOption {
  label: string;
  id: number; // ID is always a number
}

interface SelectInputProps {
  name: string;
  control: any;
  label?: string;
  options: SelectOption[];
  placeholder?: string;
  error?: string;
  isRequired?: boolean;
  className?: string;
  color?:
    | "default"
    | "primary"
    | "info"
    | "warning"
    | "success"
    | "destructive";
  size?: "sm" | "md" | "lg" | "xl";
  variant?:
    | "flat"
    | "underline"
    | "bordered"
    | "faded"
    | "ghost"
    | "flat-underline";
  radius?: "none" | "sm" | "md" | "lg" | "xl";
  shadow?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  valueType?: "id" | "label"; // New prop to conditionally choose value type
}

const SelectInput: React.FC<SelectInputProps> = ({
  name,
  control,
  label,
  options,
  placeholder = "Select an option",
  error,
  isRequired = false,
  className,
  color,
  size,
  variant,
  radius,
  shadow,
  valueType = "id", // Default to using 'id' for value
}) => {
  return (
    <div className={className}>
      {label && (
        <label htmlFor={name} className="mb-2 flex gap-1 items-center z-[9999]">
          {label}
          {isRequired && <span className="text-destructive">*</span>}{" "}
        </label>
      )}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <>
            <Select
              onValueChange={(value) => {
                // Set the value based on the valueType
                field.onChange(valueType === "id" ? Number(value) : value);
              }}
              value={field.value ? String(field.value) : ""}
            >
              <SelectTrigger
                color={color}
                size={size}
                variant={variant}
                radius={radius}
                shadow={shadow}
              >
                <SelectValue>
                  {field.value
                    ? options.find((option) =>
                        valueType === "id"
                          ? option.id === Number(field.value)
                          : option.label === field.value
                      )?.label
                    : placeholder}
                </SelectValue>
              </SelectTrigger>
              <SelectContent className="z-[9999]">
                {options.map((option) => (
                  <SelectItem
                    key={option.id}
                    value={
                      valueType === "id" ? String(option.id) : option.label
                    }
                  >
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {error && <p className="text-destructive text-sm">{error}</p>}
          </>
        )}
      />
    </div>
  );
};

export default SelectInput;
