import { CountryList } from "../../components/country-list";
import { Search } from "../../components/search";

type Props = {
  params: {
    allParams?: string[];
  };
  searchParams: {
    search?: string;
    region?: string;
  };
};

export function generateMetadata({ searchParams: { search, region } }: Props) {
  let title = "Results";
  if (search && region) title = `Results for ${search} - region ${region}`;
  else if (search) title = `Results for ${search}`;
  else if (region) title = `Results for region ${region}`;

  return { title };
}

export default function Page({ searchParams: { region, search } }: Props) {
  return (
    <>
      <Search region={region} search={search} />
      <section className="py-7 px-4 bg-gray-50 xl:px-0">
        <CountryList region={region} search={search} />
      </section>
    </>
  );
}
