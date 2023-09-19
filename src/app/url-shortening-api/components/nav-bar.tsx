import Link from "next/link";

import { navLinks } from "../data";
import { NavLinks } from "./nav-links";
import { Logo } from "./logo";
import { HamburgerMenu } from "./hamburger-menu";

export function NavBar() {
  return (
    <header className="max-w-6xl mx-auto py-10 px-4 xl:px-0">
      <nav className="flex items-center justify-between lg:justify-start gap-16">
        <Link href="/">
          <Logo />
        </Link>
        <div className="hidden space-x-5 lg:block">
          <NavLinks links={navLinks} />
        </div>
        <div className="hidden ml-auto space-x-2 lg:block">
          <button className="btn btn-small text-url-shortening-api-gray">
            Login
          </button>
          <button className="btn btn-small btn-primary btn-round">
            Sign Up
          </button>
        </div>
        <HamburgerMenu />
      </nav>
    </header>
  );
}
