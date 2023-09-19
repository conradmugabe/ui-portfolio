import Image from "next/image";
import { ElementRef } from "react";

type Props = {};

export function Logo({}: Props) {
  return (
    <Image
      src="/url-shortening-api/logo.svg"
      alt="shortly logo"
      className=""
      width={200}
      height={50}
    />
  );
}
