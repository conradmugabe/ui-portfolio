import Image from "next/image";

import { FrontendMentorCopyright } from "@/components/copyright";
import { ArticleOverviews } from "./components/article-overview";
import { NewsOverviews } from "./components/news-overview";
import { NavBar } from "./components/nav-bar";
import { articles, news } from "./data";

export default function NewsHomepageMain() {
  return (
    <>
      <NavBar />
      <section className="relative w-full h-80 sm:col-span-full lg:col-span-2 lg:row-start-1">
        <Image
          src="/news-homepage-main/image-web-3-mobile.jpg"
          alt="web 3 image"
          fill
        />
      </section>
      <section className="lg:col-span-1 lg:row-start-2">
        <h1 className="font-extrabold text-news-homepage-main-very-dark-blue text-5xl">
          The Bright Future of Web 3.0?
        </h1>
      </section>
      <section className="space-y-4 lg:col-span-1 lg:row-start-2">
        <p className="text-news-homepage-main-dark-grayish-blue">
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <button className="uppercase font-semibold text-news-homepage-main-off-white bg-news-homepage-main-soft-red h-14 px-10 tracking-[0.2em]">
          Read more
        </button>
      </section>
      <NewsOverviews news={news} />
      <ArticleOverviews articles={articles} />
      <FrontendMentorCopyright />
    </>
  );
}
