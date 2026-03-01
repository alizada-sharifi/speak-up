import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

type CustomButtonProps = {
  variant?: "primary" | "secondary" | "primaryOutline";
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
};

function CustomButton({
  variant = "primary",
  children,
  type = "button",
  className,
  disabled,
  ...props
}: CustomButtonProps) {
  // ================ variants styles ===============
  const buttonVariant = {
    primary:
      "bg-primary-400 py-5 px-4 rounded-md text-white hover:bg-primary-300",
    primaryOutline:
      "bg-transparent border border-primary-400 text-primary-400 hover:bg-transparent hover:text-primary-300",
    secondary: "bg-secondary-300 hover:bg-secondary-200 rounded-md py-2 px-4",
  };

  return (
    <Button
      type={type}
      className={cn("cursor-pointer w-fit", buttonVariant[variant], className)}
      disabled={disabled}
      {...props}
    >
      {children}
    </Button>
  );
}

export default CustomButton;
