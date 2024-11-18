"use client";
import { Checkbox } from "@/components/ui/checkbox"; // Assuming Checkbox is in this path
import { CheckboxColor, Shadow } from "@/lib/type";
import { Controller } from "react-hook-form";

interface CheckboxFormFieldProps {
  name: string;
  control: any;
  label?: string;
  error?: string;
  isRequired?: boolean;
  className?: string;
  color?: CheckboxColor;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  radius?: "none" | "sm" | "md" | "lg" | "xl" | "full";
  variant?: "solid" | "plain" | "faded" | "outline" | "filled-outline";
  shadow?: Shadow;
  icon?: string;
}

const CheckboxFormField: React.FC<CheckboxFormFieldProps> = ({
  name,
  control,
  label,
  error,
  isRequired = false,
  className,
  color,
  size,
  radius,
  variant,
  icon,
}) => {
  return (
    <div className={className}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <>
            <div className="flex items-center">
              <Checkbox
                {...field} // Spread field props from React Hook Form
                id={name}
                color={color}
                size={size}
                radius={radius}
                variant={variant}
                checked={field.value}
                onCheckedChange={(checked) => field.onChange(checked)}
              >
                {label && (
                  <label htmlFor={name} className="flex gap-1 items-center">
                    {label}
                    {isRequired && <span className="text-destructive">*</span>}
                  </label>
                )}
              </Checkbox>
            </div>
            {error && <p className="text-destructive text-sm mt-1">{error}</p>}
          </>
        )}
      />
    </div>
  );
};

export default CheckboxFormField;
