import Image from "next/image";

interface ArrowHeadingProps {
  label: string;
}

export default function ArrowHeading({ label }: ArrowHeadingProps) {
  return (
    <>
      <h1 className="font-inter font-medium text-base leading-6 bg-gradient-to-r from-[#4F16EE] to-[#8F16EE] text-white flex items-center gap-2 rounded-full px-4 py-1.5 mb-4">
        <span>{label}</span>
        <Image
          loading="lazy"
          src="/media/images/icons/arrow-right.svg"
          alt="Arrow right"
          title="Arrow right"
          width={18}
          height={18}
        />
      </h1>
    </>
  );
}
