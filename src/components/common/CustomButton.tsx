import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

type CustomButtonProps = {
  variant?: "primary" | "secondary";
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
    primary: "",
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
