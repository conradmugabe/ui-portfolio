import Image from "next/image";

import { FrontendMentorCopyright } from "@/components/copyright";
import { FooterList } from "./components/footer-list";
import { company, features, resources, socials, statistics } from "./data";
import { Socials } from "./components/socials";
import { Logo } from "./components/logo";
import { Cards } from "./components/card";

export default function UrlShorteningPage() {
  return (
    <>
      {/* <header>

    <nav>
  Features
  Pricing
  Resources
    </nav>

  Login
  Sign Up
  </header> */}
      <section className="max-w-6xl mx-auto flex flex-col gap-8 py-8 md:flex-row-reverse">
        <div className="md:w-1/2">
          <Image
            src="/url-shortening-api/illustration-working.svg"
            alt="illustration working"
            width={375}
            height={300}
          />
        </div>
        <div className="flex flex-col items-center text-center gap-4 md:items-start md:text-left md:w-1/2">
          <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl lg:leading-tight">
            More than just shorter links
          </h2>
          <p className="text-url-shortening-api-gray md:w-9/12">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </section>
      {/* <section>
    <input type="text"
    placeholder="Shorten a link here..."
    />
    <button>

  Shorten It!
    </button>
  </section> */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center gap-3 my-14">
            <h2 className="font-bold tracking-wide text-center text-4xl">
              Advanced Statistics
            </h2>
            <p className="text-url-shortening-api-gray font-medium text-center w-10/12  md:w-1/2 lg:w-[45%]">
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </p>
          </div>
          <div className="mt-20 px-4 flex flex-col gap-20 md:flex-row md:gap-6 md:mt-28">
            <Cards cards={statistics} />
          </div>
        </div>
      </section>
      <section className="py-16 bg-url-shortening-api-dark-violet bg-[url('/url-shortening-api/bg-boost-mobile.svg')] bg-no-repeat bg-cover sm:bg-[url('/url-shortening-api/bg-boost-desktop.svg')]">
        <div className="flex flex-col items-center gap-6">
          <h2 className="font-bold text-white tracking-wide text-3xl text-center">
            Boost your links today
          </h2>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </section>
      <footer className="bg-url-shortening-api-very-dark-violet text-white py-20">
        <div className="flex flex-col items-center gap-9 max-w-6xl mx-auto lg:flex-row lg:items-start lg:gap-0 lg:justify-between">
          <Logo />
          <FooterList title="Features" data={features} />
          <FooterList title="Resources" data={resources} />
          <FooterList title="Company" data={company} />
          <Socials socials={socials} />
        </div>
      </footer>
      <FrontendMentorCopyright />
    </>
  );
}
