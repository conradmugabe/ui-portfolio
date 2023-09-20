import Image from "next/image";
import Link from "next/link";
import { HamburgerMenu } from "./hamburger-menu";

type NavLinksProps = {
  links: string[];
};

type Props = {
  links: string[];
};

function NavLinks({ links }: NavLinksProps) {
  return (
    <>
      {links.map((link) => (
        <Link
          key={link}
          href="#"
          className="text-news-homepage-main-dark-grayish-blue transition duration-300 hover:text-news-homepage-main-soft-orange"
        >
          {link}
        </Link>
      ))}
    </>
  );
}

function Logo() {
  return (
    <h1 className="relative w-10 h-16">
      <Image
        src="/news-homepage-main/logo.svg"
        alt="news homepage main logo"
        className="object-contain"
        fill
      />
    </h1>
  );
}

export function NavBar({ links }: Props) {
  return (
    <header className="row-start-1 col-span-full pt-6 pb-1">
      <nav className="flex items-center justify-between">
        <Link href="#">
          <Logo />
        </Link>
        <div className="hidden md:block md:space-x-8 lg:space-x-10 xl:space-x-12">
          <NavLinks links={links} />
        </div>
        <HamburgerMenu />
      </nav>
    </header>
  );
}
