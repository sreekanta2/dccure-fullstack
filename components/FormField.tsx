"use client";
import { Textarea } from "@/components/ui/textarea"; // Assuming the Textarea component is in this path
import { Shadow, TextAreaColor } from "@/lib/type";
import { Controller } from "react-hook-form";

interface TextareaFormFieldProps {
  name: string;
  control: any;
  label?: string;
  placeholder?: string;
  error?: string;
  isRequired?: boolean;
  className?: string;
  color?: TextAreaColor;

  variant?:
    | "flat"
    | "underline"
    | "bordered"
    | "faded"
    | "ghost"
    | "flat-underline";
  radius?: "none" | "sm" | "md" | "lg" | "xl";
  shadow?: Shadow;
}

const TextareaFormField: React.FC<TextareaFormFieldProps> = ({
  name,
  control,
  label,
  placeholder = "Enter text...",
  error,
  isRequired = false,
  className,
  color,

  variant,
  radius,
  shadow,
}) => {
  return (
    <div className={className}>
      {label && (
        <label htmlFor={name} className="mb-2 flex gap-1 items-center">
          {label}
          {isRequired && <span className="text-destructive">*</span>}
        </label>
      )}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <>
            <Textarea
              {...field} // Spread field props from React Hook Form
              placeholder={placeholder}
              color={color}
              variant={variant}
              radius={radius}
              shadow={shadow}
              value={field.value}
            />
            {error && <p className="text-destructive text-sm mt-1">{error}</p>}
          </>
        )}
      />
    </div>
  );
};

export default TextareaFormField;
