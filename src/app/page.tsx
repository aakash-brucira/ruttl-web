import GridCard from "./components/grid-card";
import Hero from "./components/hero";

const heroData = {
  badgeImage: {
    path: "/media/images/product-of-day.webp",
    title: "Product of the day",
    width: 250,
    height: 54,
  },
  heading:
    "One suite for all types of <br /> <strong>website</strong> feedback",
  description:
    "Share your work and ideas through instantly shareable <br /> links. Jumpshare combines file sharing",
  btnGroup: [
    {
      href: "#",
      label: "Get Started for Free",
      hasArrow: true,
      variant: "primary" as const,
    },
    {
      href: "#",
      label: "Book a Demo",
      variant: "bordered" as const,
    },
  ],
  bannerImage: {
    path: "/media/images/home-hero.webp",
    title: "Home hero banner",
    width: 1440,
    height: 433,
  },
};
const gridCard1Data = {
  headingArea: {
    label: "Review Live Websites",
    heading:
      "Ensure your <strong>website</strong> is pixel<br/> perfect at code level",
    description:
      "Upload as many files as you need, share them with a single link, and collaborate in real <br /> time. No extra software required. Keep everyone aligned and avoid delays.",
  },
  contentArea: {
    mainCard: {
      cardContent: {
        cardHeading:
          "Comment directly on live website to leave contextual feedback",
        cardDesc:
          "Report bugs directly on product in form of comments so you do not loose the context. The comments will get added in form of tickets to your dashboard.",
        btnGroup: [
          {
            href: "#knowmore",
            label: "Know more",
            variant: "primary" as const,
          },
          {
            href: "#get-started",
            label: "Get Started",
            hasArrow: true,
            variant: "bordered" as const,
          },
        ],
      },
      cardMedia: {
        mediaType: "image" as const,
        path: "/media/images/grid-card/grid-1-main-card.webp",
        altText: "Grid Sectoin 1 Main Card",
      },
    },
    cardGrid: [
      {
        cardColClass: "col-60",
        cardContent: {
          cardHeading: "Comment directly on live website",
          cardDesc:
            "Report bugs directly on product in form of comments so you do not loose the context. The comments will",
          btn: {
            href: "#get-started",
            label: "Get Started",
            hasArrow: true,
            variant: "bordered" as const,
          },
        },
        cardMedia: {
          mediaType: "image" as const,
          path: "/media/images/grid-card/grid-1-card-1.webp",
          altText: "Grid Sectoin 1 Card 1",
        },
      },
      {
        cardColClass: "col-40",
        cardContent: {
          cardHeading: "Comment directly on live website",
          cardDesc:
            "Report bugs directly on product in form of comments so you do not loose the context. The comments",
          btn: {
            href: "#get-started",
            label: "Get Started",
            hasArrow: true,
            variant: "bordered" as const,
          },
        },
        cardMedia: {
          mediaType: "image" as const,
          path: "/media/images/grid-card/grid-1-card-2.webp",
          altText: "Grid Sectoin 1 Card 2",
        },
      },
      {
        cardColClass: "col-40",
        cardContent: {
          cardHeading: "Comment directly on live website",
          cardDesc:
            "Report bugs directly on product in form of comments so you do not loose the context. The comments will",
          btn: {
            href: "#get-started",
            label: "Get Started",
            hasArrow: true,
            variant: "bordered" as const,
          },
        },
      },
      {
        cardColClass: "col-60",
        cardContent: {
          cardHeading: "Comment directly on live website",
          cardDesc:
            "Report bugs directly on product in form of comments so you do not loose the context. The comments will",
          btn: {
            href: "#get-started",
            label: "Get Started",
            hasArrow: true,
            variant: "bordered" as const,
          },
        },
      },
    ],
  },
};
const gridCard2Data = {
  headingArea: {
    label: "Mobile app Feedback",
    heading:
      "Drop comments on <strong>Mobile app</strong><br /> is pixel perfect at code level",
    description:
      "Upload as many files as you need, share them with a single link, and collaborate in real time.<br /> No extra software required. Keep everyone aligned and avoid delays.",
  },
  contentArea: {
    mainCard: {
      cardMedia: {
        mediaType: "image" as const,
        path: "/media/images/grid-card/grid-2-main-card.webp",
        altText: "Grid Sectoin 2 Main Card",
      },
    },
    cardGrid: [
      {
        cardColClass: "col-50",
        cardContent: {
          cardHeading: "Comment directly on live website",
          cardDesc:
            "Report bugs directly on product in form of comments so you do not loose the context. The comments will",
          btn: {
            href: "#get-started",
            label: "Get Started",
            hasArrow: true,
            variant: "bordered" as const,
          },
        },
        cardMedia: {
          mediaType: "image" as const,
          path: "/media/images/grid-card/grid-1-card-1.webp",
          altText: "Grid Sectoin 1 Card 1",
        },
      },
      {
        cardColClass: "col-50",
        cardContent: {
          cardHeading: "Comment directly on live website",
          cardDesc:
            "Report bugs directly on product in form of comments so you do not loose the context. The comments",
          btn: {
            href: "#get-started",
            label: "Get Started",
            hasArrow: true,
            variant: "bordered" as const,
          },
        },
        cardMedia: {
          mediaType: "image" as const,
          path: "/media/images/grid-card/grid-1-card-2.webp",
          altText: "Grid Sectoin 1 Card 2",
        },
      },
    ],
  },
};
const gridCard3Data = {
  headingArea: {
    label: "Review Live Websites",
    heading:
      "Ensure your <strong>website</strong> is pixel<br/> perfect at code level",
    description:
      "Upload as many files as you need, share them with a single link, and collaborate in real <br /> time. No extra software required. Keep everyone aligned and avoid delays.",
  },
  contentArea: {
    mainCard: {
      cardContent: {
        cardHeading:
          "Comment directly on live website to leave contextual feedback",
        cardDesc:
          "Report bugs directly on product in form of comments so you do not loose the context. The comments will get added in form of tickets to your dashboard.",
        btnGroup: [
          {
            href: "#",
            label: "Get Started for Free",
            hasArrow: true,
            variant: "primary" as const,
          },
          {
            href: "#",
            label: "Book a Demo",
            variant: "bordered" as const,
          },
        ],
      },
      cardMedia: {
        mediaType: "image" as const,
        path: "/media/images/grid-card/grid-3-main-card.webp",
        altText: "Grid Sectoin 3 Main Card",
      },
    },
    cardGrid: [
      {
        cardColClass: "col-50",
        cardContent: {
          cardHeading: "Comment directly on live website",
          cardDesc:
            "Report bugs directly on product in form of comments so you do not loose the context. The comments will",
          btn: {
            href: "#get-started",
            label: "Get Started",
            hasArrow: true,
            variant: "bordered" as const,
          },
        },
        cardMedia: {
          mediaType: "image" as const,
          path: "/media/images/grid-card/grid-1-card-1.webp",
          altText: "Grid Sectoin 1 Card 1",
        },
      },
      {
        cardColClass: "col-50",
        cardContent: {
          cardHeading: "Comment directly on live website",
          cardDesc:
            "Report bugs directly on product in form of comments so you do not loose the context. The comments",
          btn: {
            href: "#get-started",
            label: "Get Started",
            hasArrow: true,
            variant: "bordered" as const,
          },
        },
        cardMedia: {
          mediaType: "image" as const,
          path: "/media/images/grid-card/grid-1-card-2.webp",
          altText: "Grid Sectoin 1 Card 2",
        },
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <Hero heroData={heroData} />

      <GridCard
        headingArea={gridCard1Data.headingArea}
        contentArea={gridCard1Data.contentArea}
      />

      <GridCard
        headingArea={gridCard2Data.headingArea}
        contentArea={gridCard2Data.contentArea}
      />

      <GridCard
        headingArea={gridCard3Data.headingArea}
        contentArea={gridCard3Data.contentArea}
      />
    </>
  );
}
