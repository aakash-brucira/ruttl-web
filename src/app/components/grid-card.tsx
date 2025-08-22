import React from "react";
import Image from "next/image";
import Button from "../micro-components/button";
import ArrowHeading from "../micro-components/arrow-heading";

type ButtonVariant = "primary" | "bordered" | "link";

interface ButtonProps {
  href: string;
  label: string;
  variant: ButtonVariant;
  hasArrow?: boolean;
}

interface CardMediaProps {
  mediaType: "image" | "video";
  path: string;
  altText?: string;
  class?: string;
}

interface CardContentProps {
  cardHeading?: string;
  cardDesc?: string;
  btnGroup?: ButtonProps[];
  btn?: ButtonProps;
}

interface GridCardItemProps {
  cardContent?: CardContentProps;
  cardMedia?: CardMediaProps;
  cardColClass?: string;
}

interface MainCardProps {
  cardContent?: CardContentProps;
  cardMedia?: CardMediaProps;
}

interface HeadingAreaProps {
  label?: string;
  heading: string;
  description?: string;
}

interface ContentAreaProps {
  mainCard?: MainCardProps;
  cardGrid?: GridCardItemProps[];
}

interface GridCardProps {
  headingArea: HeadingAreaProps;
  contentArea?: ContentAreaProps;
}

const GridCard: React.FC<GridCardProps> = ({ headingArea, contentArea }) => {
  return (
    <section className="py-[60px] md:py-[40px]" id="#">
      <div className="container mx-auto px-4">
        {/* Heading area */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-9">
          {headingArea && headingArea.label && (
            <ArrowHeading label={headingArea.label} />
          )}

          <h2
            className="font-semibold text-[50px] leading-[56px] md:text-[40px] md:leading-[44.8px] sm:text-[35px] sm:leading-[39px] mb-5"
            dangerouslySetInnerHTML={{ __html: headingArea.heading }}
          />

          {headingArea.description && (
            <p
              className="text-base leading-6 m-0"
              dangerouslySetInnerHTML={{ __html: headingArea.description }}
            />
          )}
        </div>

        {/* Content area */}
        {contentArea && (
          <div className="flex flex-col gap-5">
            {/* Main card */}
            {contentArea.mainCard && (
              <div className="main-card-wrap">
                <div
                  className={`${
                    !contentArea.mainCard.cardContent
                      ? "flex items-center justify-center mb-10 sm:mb-5"
                      : "grid grid-cols-2 md:grid-cols-1 gap-6 items-center bg-gradient-to-b from-[#FAF7FF] to-white border border-[#E2E1EA] rounded-3xl"
                  }`}
                >
                  {contentArea.mainCard.cardContent && (
                    <div className="p-15 md:p-8">
                      {contentArea.mainCard.cardContent.cardHeading && (
                        <h3 className="font-semibold text-[32px] leading-10 sm:text-2xl sm:leading-8 mb-4">
                          {contentArea.mainCard.cardContent.cardHeading}
                        </h3>
                      )}
                      {contentArea.mainCard.cardContent.cardDesc && (
                        <p className="text-base leading-6 font-medium mb-6">
                          {contentArea.mainCard.cardContent.cardDesc}
                        </p>
                      )}
                      {contentArea.mainCard.cardContent.btnGroup && (
                        <div className="flex gap-4 flex-wrap">
                          {contentArea.mainCard.cardContent.btnGroup.map(
                            (button, index) => (
                              <Button
                                key={index}
                                href={button.href}
                                label={button.label}
                                variant={button.variant}
                                hasArrow={button.hasArrow}
                              />
                            )
                          )}
                        </div>
                      )}
                    </div>
                  )}
                  {contentArea.mainCard.cardMedia && (
                    <div
                      className={`${
                        !contentArea.mainCard.cardContent
                          ? "p-0"
                          : "p-15 md:p-8"
                      }`}
                    >
                      {contentArea.mainCard.cardMedia.mediaType === "image" ? (
                        <Image
                          loading="lazy"
                          src={contentArea.mainCard.cardMedia.path}
                          alt={contentArea.mainCard.cardMedia.altText || ""}
                          title={contentArea.mainCard.cardMedia.altText}
                          width={500}
                          height={300}
                          className="w-full h-auto object-contain"
                        />
                      ) : (
                        <video
                          autoPlay
                          loop
                          muted
                          playsInline
                          src={contentArea.mainCard.cardMedia.path}
                          className="w-full h-auto object-contain"
                        />
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Card Grid */}
            {contentArea.cardGrid && (
              <div className="grid grid-cols-10 gap-5">
                {contentArea.cardGrid.map((card, index) => (
                  <div
                    key={`grid-card-${index}`}
                    className={`bg-gradient-to-b from-[#FAF7FF] to-white border border-[#E2E1EA] rounded-3xl min-h-[448px] flex flex-col justify-between gap-6 py-10 md:py-8 ${
                      card.cardColClass === "col-40"
                        ? "col-span-4"
                        : card.cardColClass === "col-50"
                        ? "col-span-5"
                        : card.cardColClass === "col-60"
                        ? "col-span-6"
                        : "col-span-1"
                    } ${index % 2 === 1 ? "flex-col-reverse" : ""}`}
                  >
                    {card.cardContent && (
                      <div className="flex gap-6 items-start px-10 md:px-8 md:flex-col md:gap-5">
                        <div className="info flex-1">
                          {card.cardContent.cardHeading && (
                            <h3 className="font-semibold text-2xl leading-8 sm:text-xl sm:leading-7 mb-2">
                              {card.cardContent.cardHeading}
                            </h3>
                          )}
                          {card.cardContent.cardDesc && (
                            <p className="text-sm leading-5 m-0">
                              {card.cardContent.cardDesc}
                            </p>
                          )}
                        </div>

                        {card.cardContent.btn && (
                          <Button
                            key={index}
                            href={card.cardContent.btn.href}
                            label={card.cardContent.btn.label}
                            variant={card.cardContent.btn.variant}
                            hasArrow={card.cardContent.btn.hasArrow}
                          />
                        )}
                      </div>
                    )}
                    {card.cardMedia && (
                      <div
                        className={`flex items-center justify-center ${
                          card.cardMedia.class === "left-side"
                            ? "justify-start"
                            : card.cardMedia.class === "right-side"
                            ? "justify-end"
                            : "justify-center"
                        }`}
                      >
                        {card.cardMedia.mediaType === "image" ? (
                          <Image
                            loading="lazy"
                            src={card.cardMedia.path}
                            alt={card.cardMedia.altText || ""}
                            title={card.cardMedia.altText}
                            width={300}
                            height={200}
                            className="w-full max-w-[calc(100%-80px)] md:max-w-[calc(100%-60px)] max-h-52 object-contain"
                          />
                        ) : (
                          <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            src={card.cardMedia.path}
                            className="w-full max-w-[calc(100%-80px)] md:max-w-[calc(100%-60px)] max-h-52 object-contain"
                          />
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default GridCard;
