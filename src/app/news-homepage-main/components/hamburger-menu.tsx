"use client";

import { useState } from "react";
import Image from "next/image";

import classnames from "classnames";
import Link from "next/link";

const menu = "/news-homepage-main/icon-menu.svg";
const menuClose = "/news-homepage-main/icon-menu-close.svg";

type Props = {
  links: string[];
};

export function HamburgerMenu({ links }: Props) {
  const [open, setIsOpen] = useState(false);

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
      <div
        className={classnames("modal", { hidden: !open })}
        onClick={(event) => {
          event.stopPropagation();
          onClose();
        }}
      >
        <div className="pr-4 pl-10 py-10 w-[70%] h-screen bg-white text-white text-base font-semibold flex flex-col gap-20 hover:text-url-shortening-api-very-dark-blue">
          <button
            className="relative block h-6 w-8 self-end sm:h-8 sm:w-10 md:hidden"
            onClick={onClose}
          >
            <Image
              src={menuClose}
              alt="hamburger menu"
              fill
              className="object-cover"
            />
          </button>
          <div className="grid gap-5">
            {links.map((link) => (
              <Link
                key={link}
                href="#"
                className="text-xl font-medium text-news-homepage-main-very-dark-blue"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
