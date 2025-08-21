import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col container pt-16 pb-8">
        <div className="grid grid-cols-5 gap-x-3">
          <div>
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
          <div>
            <h2 className="text-sm">Features</h2>
          </div>
        </div>
      </div>
    </footer>
  );
}
