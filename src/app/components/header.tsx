import Image from "next/image";
import Link from "next/link";
import Button from "../micro-components/button";

export default function Header() {
  return (
    <header className="w-full">
      <div className="container py-5">
        <div className="flex items-center justify-between gap-x-12">
          <div className="flex items-center gap-6">
            <Link href="/">
              <Image
                src="/media/images/logo.svg"
                alt="Ruttl Logo"
                width={86}
                height={24}
                className="w-21.5 h-auto object-contain object-center"
              />
            </Link>

            <div className="items-center gap-3 hidden md:flex">
              {[
                {
                  icon: "/media/images/custom-icons/website-icon.webp",
                  href: "#",
                  label: {
                    default: "Website",
                    hovered: "Feedback",
                  },
                },
                {
                  icon: "/media/images/custom-icons/mobile-icon.webp",
                  href: "#",
                  label: {
                    default: "Mobile",
                    hovered: "App Feedback",
                  },
                },
                {
                  icon: "/media/images/custom-icons/image-pdf-icon.webp",
                  href: "#",
                  label: {
                    default: "Image/PDF",
                    hovered: "Feedback",
                  },
                },
                {
                  href: "#",
                  label: {
                    default: "Explore",
                  },
                },
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={`group font-inter font-medium text-[15px] leading-6 flex items-center gap-2 border rounded-[64px] px-4 py-[9px] ${
                    item.icon ? "border-grey" : "border-transparent"
                  }`}
                >
                  {item.icon && (
                    <Image
                      src={item.icon}
                      alt={`${item.label.default} icon`}
                      width={24}
                      height={24}
                      className="size-6 object-contain object-center"
                    />
                  )}

                  {item.label.hovered ? (
                    <span className="flex overflow-hidden group-hover:bg-linear-to-r group-hover:from-primary-blue group-hover:to-primary-purple group-hover:text-transparent group-hover:bg-clip-text">
                      <span>{item.label.default}</span>
                      <span className="max-w-0 group-hover:max-w-[500px] transition-[max-width] duration-700 overflow-hidden whitespace-nowrap">
                        <span className="pl-1">{item.label.hovered}</span>
                      </span>
                    </span>
                  ) : (
                    <span className="group-hover:bg-linear-to-r group-hover:from-primary-blue group-hover:to-primary-purple group-hover:text-transparent group-hover:bg-clip-text">
                      {item.label.default}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </div>

          <div className="gap-3 items-center hidden md:flex">
            <Button href="#" label="Pricing" variant="link" />
            <Button href="#" label="Login" variant="bordered" />
            <Button href="#" label="Get Started" />
          </div>
        </div>
      </div>
    </header>
  );
}
