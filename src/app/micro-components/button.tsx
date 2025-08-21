import Link from "next/link";
import Image from "next/image";

// Define the valid variants as a type
type ButtonVariant = "primary" | "bordered" | "link";

interface ButtonProps {
  href?: string;
  label?: string;
  variant?: ButtonVariant;
  hasArrow?: boolean;
}

export default function Button({
  href = "#",
  label = "Get Started",
  variant = "primary",
  hasArrow = false,
}: ButtonProps) {
  // Base classes for all buttons
  const baseClasses =
    "group font-inter font-medium cursor-pointer text-[14px] leading-5 flex items-center rounded-lg px-5 transition-all duration-500 ease-in-out";

  // Variant specific classes
  const variantClasses: Record<ButtonVariant, string> = {
    primary:
      "bg-gradient-to-r from-primary-blue to-primary-purple text-white hover:scale-105 hover:shadow-lg",
    bordered:
      "border border-grey text-foreground hover:bg-foreground hover:text-white",
    link: "hover:bg-linear-to-r hover:from-primary-blue hover:to-primary-purple hover:text-transparent hover:bg-clip-text",
  };

  // Arrow animation classes
  const arrowClasses = hasArrow ? "gap-1.5 hover:gap-2.5" : "";

  // Combined classes
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${arrowClasses}`;

  return (
    <Link
      href={href}
      className={`${buttonClasses} ${
        variant === "bordered" ? "py-[11px]" : "py-3"
      }`}
    >
      {label}
      {hasArrow && (
        <Image
          src="/media/images/icons/btn-arrow-right.svg"
          alt="Arrow Right"
          width={18}
          height={18}
          className={`size-4.5 object-contain duration-500 ease-in-out ${
            variant === "primary"
              ? "brightness-[2000]"
              : variant === "bordered"
              ? "group-hover:brightness-[2000]"
              : ""
          }`}
        />
      )}
    </Link>
  );
}
