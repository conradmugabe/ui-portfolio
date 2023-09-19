import Link from "next/link";

type News = {
  id: number;
  title: string;
  description: string;
};

type Props = {
  news: News[];
};

type NewsOverviewProps = {
  news: News;
};

function NewsOverview({ news }: NewsOverviewProps) {
  return (
    <>
      <article className="space-y-2">
        <Link
          href="#"
          className="text-news-homepage-main-off-white font-extrabold text-2xl cursor-pointer hover:text-news-homepage-main-soft-red sm:text-xl md:text-2xl lg:text-lg"
        >
          {news.title}
        </Link>
        <p className="text-news-homepage-main-grayish-blue font-normal text-sm leading-relaxed">
          {news.description}
        </p>
      </article>
      <div className="w-full h-[0.5px] bg-news-homepage-main-off-white/50 last:hidden" />
    </>
  );
}

export function NewsOverviews({ news }: Props) {
  return (
    <section className="bg-news-homepage-main-very-dark-blue p-4 space-y-8 md:p-6 lg:row-start-1 lg:row-span-2">
      <h2 className="text-news-homepage-main-soft-orange text-4xl font-bold">
        New
      </h2>
      <div className="space-y-10">
        {news.map((_news) => (
          <NewsOverview key={_news.id} news={_news} />
        ))}
      </div>
    </section>
  );
}
