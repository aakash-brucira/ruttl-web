import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col container pt-16 pb-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-9 gap-y-12 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="block mb-3">
              <Image
                src="/media/images/logo.svg"
                alt="Ruttl Logo"
                width={73}
                height={21}
                className="w-[73px] h-auto object-contain object-center"
              />
            </Link>

            <p className="text-[13px] leading-[1.4] max-w-40 mb-6 md:mb-8">
              A website feedback tool for live website
            </p>

            <div className="flex flex-wrap gap-3 mb-4">
              {[
                {
                  icon: "/media/images/custom-icons/social/linkedin.svg",
                  link: "https://www.linkedin.com/company/ruttl",
                  title: "LinkedIn",
                },
                {
                  icon: "/media/images/custom-icons/social/youtube.svg",
                  link: "https://www.youtube.com/channel/UCGsHNDVsWz93sCp2p3u_QhQ",
                  title: "Youtube",
                },
                {
                  icon: "/media/images/custom-icons/social/x-twitter.svg",
                  link: "https://x.com/RuttlApp",
                  title: "X - Twitter",
                },
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  target="blank"
                  className="block transition-all duration-300 ease-in hover:scale-110 hover:opacity-50"
                >
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={28}
                    height={28}
                    className="size-7 object-contain object-center"
                  />
                </Link>
              ))}
            </div>

            <Link
              href="https://join.slack.com/t/ruttlcommunity/shared_invite/zt-p4r090hy-Ya7pxDgCfD4kYnzVJRNovQ"
              target="blank"
            >
              <Image
                src="/media/images/join-on-slack.webp"
                alt="Join on slack"
                width={173}
                height={44}
                className="w-44 h-auto max-w-full object-contain object-center"
              />
            </Link>
          </div>

          {/* Menu List */}
          {[
            [
              {
                menuTitle: "Features",
                menu: [
                  {
                    menuLabel: "Website Feedback Tool",
                    link: "#website-feedback-tool",
                  },
                  {
                    menuLabel: "Mobile Feedback Tool",
                    link: "#mobile-feedback-tool",
                  },
                  {
                    menuLabel: "Bug Tracking",
                    link: "#bug-tracking",
                  },
                  {
                    menuLabel: "PDF Annotation",
                    link: "#pdf-annotation",
                  },
                  {
                    menuLabel: "Comment on Live website",
                    link: "#comment-on-live-website",
                  },
                  {
                    menuLabel: "Edit Website",
                    link: "#edit-website",
                  },
                  {
                    menuLabel: "Review Website Versions",
                    link: "#review-website-versions",
                  },
                  {
                    menuLabel: "Integrations",
                    link: "#integrations",
                  },
                ],
              },
            ],
            [
              {
                menuTitle: "Features",
                menu: [
                  {
                    menuLabel: "Blog",
                    link: "#blog",
                  },
                  {
                    menuLabel: "About us",
                    link: "#about-us",
                  },
                  {
                    menuLabel: "Contact Us",
                    link: "#contact-us",
                  },
                  {
                    menuLabel: "Pricing",
                    link: "#pricing",
                  },
                  {
                    menuLabel: "Sitemap",
                    link: "#sitemap",
                  },
                  {
                    menuLabel: "Press Kit",
                    link: "#press-kit",
                  },
                  {
                    menuLabel: "Alternative",
                    link: "#alternative",
                  },
                ],
              },
            ],
            [
              {
                menuTitle: "Legal",
                menu: [
                  {
                    menuLabel: "Term and Conditions",
                    link: "#term-and-conditions",
                  },
                  {
                    menuLabel: "Privacy Policy",
                    link: "#privacy-policy",
                  },
                  {
                    menuLabel: "Cookies",
                    link: "#cookies",
                  },
                  {
                    menuLabel: "ISO",
                    link: "#iso",
                  },
                  {
                    menuLabel: "GDPR",
                    link: "#gdpr",
                    badge: "Coming soon",
                  },
                ],
              },
              {
                menuTitle: "Top Blog Posts",
                menu: [
                  {
                    menuLabel: "Top Web design Blogs",
                    link: "#top-web-design-blogs",
                  },
                  {
                    menuLabel: "Top Free PDF Annotation Tools",
                    link: "#top-free-pdf-annotation-tools",
                  },
                ],
              },
            ],
            [
              {
                menuTitle: "Ruttl for",
                menu: [
                  {
                    menuLabel: "For Agencies",
                    link: "#for-agencies",
                  },
                  {
                    menuLabel: "For Product Companies",
                    link: "#for-product-companies",
                  },
                  {
                    menuLabel: "For QA Team",
                    link: "#for-qa-team",
                  },
                ],
              },
              {
                menuTitle: "Tools",
                menu: [
                  {
                    menuLabel: "Image Feedback Tool",
                    link: "#image-feedback-tool",
                  },
                  {
                    menuLabel: "Chrome Extension",
                    link: "#chrome-extension",
                  },
                ],
              },
            ],
          ].map((menuGroup, mainIndex) => (
            <div key={mainIndex}>
              {menuGroup.map((mainMenu, index) => (
                <div key={index} className={index > 0 ? "mt-7 md:mt-8" : ""}>
                  <h2 className="text-sm leading-[1.4] mb-[13px] font-semibold">
                    {mainMenu.menuTitle}
                  </h2>

                  <ul className="flex flex-col gap-[13px] text-sm leading-[1.4]">
                    {mainMenu.menu.map((menuItem, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-center gap-2.5 text-foreground-light transition-all duration-500 ease-in-out hover:text-foreground"
                      >
                        <Link
                          className="relative before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-[1px] before:w-0 before:bg-foreground before:duration-500 ease-in-out hover:before:w-full"
                          href={menuItem.link}
                        >
                          {menuItem.menuLabel}
                        </Link>

                        {menuItem.badge && (
                          <span className="py-[5px] px-2 bg-grey-light rounded-[40px] text-[11px] font-medium leading-[1.4]">
                            {menuItem.badge}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
