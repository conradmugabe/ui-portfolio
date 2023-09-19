import Image from "next/image";

type Props = {};

export function Logo({}: Props) {
  return (
    <div className="relative h-6 w-24 md:h-8 md:w-28 lg:h-10 lg:w-32 xl:h-12 xl:w-36">
      <Image
        src="/url-shortening-api/logo.svg"
        alt="shortly logo"
        fill
        className="object-contain"
      />
    </div>
  );
}
