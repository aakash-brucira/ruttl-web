"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "../micro-components/button";
import { useState, useEffect } from "react";

export default function Header() {
  // To manage the scrolled header
  const [isScrolled, setIsScrolled] = useState(false);

  // To manage the mobike menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    // setIsMobileMenuOpen((prev) => !prev);
    setIsMobileMenuOpen((prev) => {
      const newState = !prev;

      if (newState) {
        document.body.classList.add("overflow-hidden"); // Disable scrolling
      } else {
        document.body.classList.remove("overflow-hidden"); // Re-enable scrolling
      }

      return newState;
    });
  };
  const handleCloseMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.classList.remove("overflow-hidden"); // Ensure scrolling is re-enabled
  };

  // Handling scrolled header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full fixed z-[999] transition-all duration-500 ${
        isMobileMenuOpen || isScrolled ? "bg-white" : ""
      }`}
    >
      <div className="container !px-0 relative xl:!px-4 xl:py-5">
        <div className="xl:flex items-center justify-between gap-x-12">
          <div className="flex items-center gap-6">
            <div className="flex items-center justify-between px-4 py-5 w-full bg-white xl:w-auto z-[2] xl:px-0 xl:py-0 xl:bg-transparent">
              <Link href="/">
                <Image
                  src="/media/images/logo.svg"
                  alt="Ruttl Logo"
                  width={86}
                  height={24}
                  className="w-21.5 h-auto object-contain object-center"
                />
              </Link>

              <div className="flex relative items-center xl:hidden">
                <button
                  className={`relative size-5 ${
                    isMobileMenuOpen ? "translate-y-0" : "-translate-y-0.5"
                  }`}
                  onClick={handleToggleMenu}
                  aria-label="Toggle navigation"
                >
                  <span
                    className={`absolute top-1/2 block h-0.5 w-5 duration-500 bg-primary-blue ${
                      isMobileMenuOpen
                        ? "translate-y-0 rotate-45"
                        : "-translate-y-1"
                    }`}
                  ></span>
                  <span
                    className={`absolute top-1/2 block h-0.5 w-5 duration-500 bg-primary-blue ${
                      isMobileMenuOpen ? "-rotate-45" : "translate-y-0.5"
                    }`}
                  ></span>
                  <span
                    className={`absolute top-1/2 translate-y-2 block h-0.5 duration-500 bg-primary-orange ${
                      isMobileMenuOpen ? "w-0" : "w-4"
                    }`}
                  ></span>
                </button>
              </div>
            </div>

            <div
              className={`flex z-[1] flex-col h-screen overflow-y-auto bg-white px-4 pt-20 pb-8 items-center justify-start gap-3 absolute top-0 left-0 right-0 w-full duration-700 transition-all ease-in-out ${
                isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
              } xl:h-auto xl:flex-row xl:px-0 xl:pt-0 xl:pb-0 xl:static xl:justify-center xl:bg-transparent xl:translate-0`}
            >
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
                  onClick={handleCloseMenu}
                  className={`group w-max font-inter font-medium text-[15px] leading-6 flex items-center gap-2 border rounded-[64px] px-4 py-[9px] ${
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
                      <span className="xl:max-w-0 xl:group-hover:max-w-[500px] xl:transition-[max-width] duration-700 xl:overflow-hidden whitespace-nowrap">
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

              <div className="flex flex-col items-center gap-3 mt-auto xl:hidden">
                <Button href="#" label="Pricing" variant="link" />
                <Button href="#" label="Login" variant="bordered" />
                <Button href="#" label="Get Started" />
              </div>
            </div>
          </div>

          <div className="gap-3 items-center hidden xl:flex">
            <Button href="#" label="Pricing" variant="link" />
            <Button href="#" label="Login" variant="bordered" />
            <Button href="#" label="Get Started" />
          </div>
        </div>
      </div>
    </header>
  );
}
