import Image from "next/image";
import ButtonLarge from "../micro-components/button-large";

type ButtonVariant = "primary" | "bordered" | "link";

interface ButtonProps {
  href: string;
  label: string;
  variant: ButtonVariant;
  hasArrow?: boolean;
}

interface ImageProps {
  path: string;
  title?: string;
  width?: number;
  height?: number;
}

interface HeroData {
  badgeImage?: ImageProps;
  heading: string;
  description: string;
  btnGroup?: ButtonProps[];
  bannerImage?: ImageProps;
}

interface HeroProps {
  heroData: HeroData;
}

export default function Hero({ heroData }: HeroProps) {
  return (
    <section className="flex bg-gradient-to-b from-[#FBFBFD] to-white flex-col gap-2.5 justify-between pt-20 md:pt-24 xl:pt-36">
      <div className="flex container flex-col items-center text-center">
        {heroData.badgeImage && (
          <Image
            src={heroData.badgeImage.path}
            alt={heroData.badgeImage.title || "Image"}
            width={heroData.badgeImage.width || 250}
            height={heroData.badgeImage.height || 54}
            className="mb-5 md:mb-6"
          />
        )}

        <h1
          className="text-3xl leading-9 mb-4 md:mb-5 sm:text-4xl sm:leading-11 md:text-5xl md:leading-14 lg:text-6xl lg:leading-16"
          dangerouslySetInnerHTML={{ __html: heroData.heading }}
        />

        <p
          className="text-lg text-foreground-light mb-8 md:mb-10"
          dangerouslySetInnerHTML={{ __html: heroData.description }}
        />

        {heroData.btnGroup && (
          <div className="flex flex-wrap justify-center gap-3">
            {heroData.btnGroup &&
              heroData.btnGroup.map((button, index) => (
                <ButtonLarge
                  key={index}
                  href={button.href}
                  label={button.label}
                  variant={button.variant}
                  hasArrow={button.hasArrow}
                />
              ))}
          </div>
        )}
      </div>

      {heroData.bannerImage && (
        <Image
          src={heroData.bannerImage.path}
          alt={heroData.bannerImage.title || "Image"}
          width={heroData.bannerImage.width || 1440}
          height={heroData.bannerImage.height || 433}
          className="w-full h-auto object-center"
        />
      )}
    </section>
  );
}
