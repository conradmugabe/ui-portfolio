import Link from "next/link";
import Image from "next/image";

import { navLinks } from "../data";
import { NavLinks } from "./nav-links";

export function NavBar() {
  return (
    <header className="max-w-6xl mx-auto py-10 px-4 xl:px-0">
      <nav className="flex items-center gap-16">
        <Link href="#">
          <Image
            src="/url-shortening-api/logo.svg"
            alt="shortly logo"
            className=""
            width={200}
            height={50}
          />
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
      </nav>
    </header>
  );
}
