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

export function Menu({ links }: Props) {
  return (
    <div className="absolute bg-white w-3/4 h-screen right-0 pr-4 pl-10 py-12 flex flex-col gap-20">
      <button className="relative block h-10 w-10 self-end sm:h-12 sm:w-12 md:hidden">
        <Image
          src={menuClose}
          alt="hamburger menu"
          fill
          className="object-cover"
        />
      </button>
      <div className="flex flex-col gap-5 items-start">
        {links.map((link) => (
          <Link
            key={link}
            href="#"
            className="text-lg font-medium text-news-homepage-main-very-dark-blue hover:text-news-homepage-main-soft-orange"
          >
            {link}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function HamburgerMenu({ links }: Props) {
  const [open, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <>
      <button className="relative block h-6 w-14 md:hidden" onClick={onOpen}>
        <Image src={menu} alt="hamburger menu" fill className="object-cover" />
      </button>
      <div
        className={classnames("modal md:hidden", { hidden: !open })}
        onClick={(event) => {
          event.stopPropagation();
          onClose();
        }}
      >
        <div className="relative">
          <Menu links={links} />
        </div>
      </div>
    </>
  );
}
