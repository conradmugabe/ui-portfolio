import { CountryList } from "../../components/country-list";
import { Search } from "../../components/search";

type Props = {
  params: {
    allParams?: string[];
  };
};

export function generateMetadata({ params: { allParams } }: Props) {
  const search = allParams?.[0];
  const region = allParams?.[1];
  return { title: `Results for ${search} - region ${region}` };
}

export default function Page({ params: { allParams } }: Props) {
  const search = allParams?.[0];
  const region = allParams?.[1];

  return (
    <>
      <Search />
      <section className="py-7 px-4 bg-gray-50 xl:px-0">
        <CountryList region={region} search={search} />
      </section>
    </>
  );
}
