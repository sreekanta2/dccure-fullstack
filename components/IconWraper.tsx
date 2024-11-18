import { LucideIcon } from "lucide-react";
import { forwardRef } from "react";

type IconWrapperProps = {
  icon: LucideIcon;
  size?: number;
  strokeWidth?: number;
  className?: string;
};

const IconWrapper = forwardRef<HTMLDivElement, IconWrapperProps>(
  ({ icon: Icon, size = 15, strokeWidth = 2, className = "" }, ref) => {
    return (
      <div
        ref={ref}
        className={`border dark:border h-7 w-7 dark:border-gray-700 p-1 rounded-full shadow-lg cursor-pointer grid place-items-center ${className}`}
      >
        {Icon && <Icon size={size} strokeWidth={strokeWidth} />}
      </div>
    );
  }
);

IconWrapper.displayName = "IconWrapper"; // Helps with debugging

export default IconWrapper;
