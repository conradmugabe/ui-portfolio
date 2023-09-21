import { FrontendMentorCopyright } from "@/components/copyright";
import { CountryList } from "./components/country-list";
import { Search } from "./components/search";

export default function RestCountriesApiPage() {
  return (
    <>
      <Search />
      <section className="py-7 px-4 bg-gray-50 xl:px-0">
        <CountryList />
      </section>
      <FrontendMentorCopyright />
    </>
  );
}
