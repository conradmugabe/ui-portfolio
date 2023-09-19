"use client";

import { useState } from "react";

import classnames from "classnames";
import { navLinks } from "../data";
import Link from "next/link";

export function HamburgerMenu() {
  const [open, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);
  const label = open ? "Close menu" : "Open menu";

  return (
    <>
      <button
        className="h-8 w-10 grid md:h-9 lg:hidden"
        onClick={() => toggle()}
      >
        <span className="h-1 bg-url-shortening-api-gray rounded-sm" />
        <span className="h-1 bg-url-shortening-api-gray rounded-sm" />
        <span className="h-1 bg-url-shortening-api-gray rounded-sm" />
      </button>
      <div
        className={classnames("modal", { hidden: !open })}
        onClick={(event) => {
          event.stopPropagation();
          setIsOpen(false);
        }}
      >
        <div className="px-8 py-12 w-full flex flex-col items-center gap-7 bg-url-shortening-api-dark-violet rounded-2xl text-white text-base font-semibold transition duration-300 hover:text-url-shortening-api-very-dark-blue">
          {navLinks.map((link) => (
            <Link
              href="#"
              key={link}
              className="hover:text-url-shortening-api-cyan"
            >
              {link}
            </Link>
          ))}
          <div className="bg-url-shortening-api-grayish-violet self-stretch h-[0.5px] rounded-full" />
          <button className="btn btn-small btn-round self-stretch">
            Login
          </button>
          <button className="btn btn-primary btn-large btn-round self-stretch sm:self-center">
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
}
