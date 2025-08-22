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

export default function Home() {
  return (
    <>
      <Hero heroData={heroData} />

      <section className="h-screen bg-black text-white flex items-center justify-center">
        <h1 className="text-4xl">Temporary section 2</h1>
      </section>
    </>
  );
}
