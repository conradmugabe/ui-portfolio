import Image from "next/image";

import { FrontendMentorCopyright } from "@/components/copyright";
import { FooterList } from "./components/footer-list";
import { company, features, resources, socials, statistics } from "./data";
import { Socials } from "./components/socials";
import { Logo } from "./components/logo";
import { Cards } from "./components/card";
import { NavBar } from "./components/nav-bar";

export default function UrlShorteningPage() {
  return (
    <>
      <NavBar />
      <section className="max-w-6xl mx-auto flex flex-col gap-8 py-8 px-4 md:flex-row-reverse md:pr-0 xl:px-0">
        <div className="relative h-80 w-full md:w-1/2 md:h-96 lg:h-[30rem]">
          <Image
            src="/url-shortening-api/illustration-working.svg"
            alt="illustration working"
            fill
            className="object-contain md:object-contain"
          />
        </div>
        <div className="flex flex-col items-center text-center gap-4 md:items-start md:text-left md:w-1/2">
          <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl lg:leading-tight">
            More than just shorter links
          </h2>
          <p className="font-medium text-lg text-url-shortening-api-gray md:w-10/12">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className="btn btn-primary btn-large btn-round mt-7">
            Get Started
          </button>
        </div>
      </section>
      <section className="relative grid min-h-[11rem]">
        <div className="bg-white" />
        <div className="bg-gray-100" />
        <div className="absolute left-0 right-0 bottom-0 top-0 m-auto max-w-6xl">
          <div className="mx-4 p-5 flex flex-col items-center gap-4 rounded-xl bg-url-shortening-api-dark-violet bg-[url('/url-shortening-api/bg-shorten-mobile.svg')] bg-no-repeat bg-cover md:flex-row md:p-10 md:bg-[url('/url-shortening-api/bg-shorten-desktop.svg')] xl:p-14 xl:m-0">
            <input
              type="text"
              placeholder="Shorten a link here..."
              className="w-full h-14 px-4 rounded-lg placeholder:font-medium"
            />
            <button className="btn btn-primary btn-large w-full md:w-auto">
              Shorten It!
            </button>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 pb-20 pt-14">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center gap-3 my-14">
            <h2 className="font-bold tracking-wide text-center text-4xl">
              Advanced Statistics
            </h2>
            <p className="text-url-shortening-api-gray font-medium text-center w-10/12  md:w-1/2 lg:w-[45%]">
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </p>
          </div>
          <div className="relative mt-20 px-4 flex flex-col gap-20 md:flex-row md:gap-6 md:mt-28 xl:px-0">
            <div className="absolute left-0 right-0 top-0 bottom-0 m-auto bg-url-shortening-api-cyan w-2 md:w-[60vw] md:h-2" />
            <Cards cards={statistics} />
          </div>
        </div>
      </section>
      <section className="py-16 bg-url-shortening-api-dark-violet bg-[url('/url-shortening-api/bg-boost-mobile.svg')] bg-no-repeat bg-cover sm:bg-[url('/url-shortening-api/bg-boost-desktop.svg')]">
        <div className="flex flex-col items-center gap-6">
          <h2 className="font-bold text-white tracking-wide text-3xl text-center">
            Boost your links today
          </h2>
          <button className="btn btn-primary btn-large btn-round">
            Get Started
          </button>
        </div>
      </section>
      <footer className="bg-url-shortening-api-very-dark-violet text-white py-20">
        <div className="flex flex-col items-center gap-9 max-w-6xl mx-auto px-4 lg:flex-row lg:items-start lg:gap-0 lg:justify-between xl:px-0">
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
