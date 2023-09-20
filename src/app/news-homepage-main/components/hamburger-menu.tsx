"use client";

import Image from "next/image";
import { useState } from "react";

const menu = "/news-homepage-main/icon-menu.svg";
// const menuClose = "/news-homepage-main/icon-menu-close.svg";

export function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <>
      <button
        className="relative block h-6 w-8 sm:h-8 sm:w-10 md:hidden"
        onClick={onOpen}
      >
        <Image src={menu} alt="hamburger menu" fill className="object-cover" />
      </button>
    </>
  );
}
