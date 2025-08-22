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

export default function ButtonLarge({
  href = "#",
  label = "Get Started",
  variant = "primary",
  hasArrow = false,
}: ButtonProps) {
  // Base classes for all buttons
  const baseClasses =
    "group w-max cursor-pointer -tracking-[0.03em] text-base leading-6 font-semibold flex items-center rounded-lg transition-all duration-500 ease-in-out";

  // Variant specific classes
  const variantClasses: Record<ButtonVariant, string> = {
    primary:
      "bg-gradient-to-r from-primary-blue to-primary-purple text-white shadow-primary hover:scale-105 hover:shadow-lg",
    bordered:
      "bg-white border border-grey text-foreground hover:bg-foreground hover:text-white",
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
        variant === "bordered" ? "px-6 py-3.5" : "px-6 py-4"
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
