import Image from "next/image";

type Article = {
  title: string;
  description: string;
  image: string;
  id: string;
};

type ArticleOverviewProps = {
  article: Article;
};

type Props = {
  articles: Article[];
};

function ArticleOverview({ article }: ArticleOverviewProps) {
  return (
    <article className="flex items-center gap-2">
      <div className="relative w-[30%] h-32">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover sm:object-cover"
        />
      </div>
      <div className="w-[70%] grid gap-1 sm:w-[60%]">
        <h3 className="font-extrabold text-4xl text-news-homepage-main-grayish-blue">
          {article.id}
        </h3>
        <h3 className="font-bold text-news-homepage-main-very-dark-blue">
          {article.title}
        </h3>
        <p className="text-sm text-news-homepage-main-dark-grayish-blue line-clamp-2">
          {article.description}
        </p>
      </div>
    </article>
  );
}

export function ArticleOverviews({ articles }: Props) {
  return (
    <section className="grid gap-4 lg:grid-cols-3 lg:col-span-full">
      {articles.map((article) => (
        <ArticleOverview key={article.id} article={article} />
      ))}
    </section>
  );
}
