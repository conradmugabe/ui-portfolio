import { BsChevronDown } from "react-icons/bs";
import { IoMdSearch } from "react-icons/io";

import { FrontendMentorCopyright } from "@/components/copyright";
import { CountryList } from "./components/country-list";

export default function RestCountriesApiPage() {
  return (
    <>
      <header className="py-7 px-4 shadow-xl shadow-black/5 xl:px-0">
        <nav className="max-w-6xl mx-auto">
          <h1 className="font-extrabold tracking-wide">Where in the world?</h1>
        </nav>
      </header>
      <section className="py-7 px-4 bg-gray-50 xl:px-0">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-start gap-10">
            <div className="h-16 bg-white py-4 px-9 w-full flex items-center gap-5 rounded-md shadow-xl shadow-black/5">
              <IoMdSearch size={28} />
              <input
                type="text"
                placeholder="Search for a country..."
                className="bg-white w-full h-full px-2 rounded-sm text-base"
              />
            </div>
            <div className="h-16 bg-white py-4 px-9 flex items-center gap-5 rounded-md shadow-xl shadow-gray-200">
              <p>Filter by Region</p>
              <BsChevronDown className="stroke-black stroke-1" size={14} />
            </div>
          </div>
        </div>
      </section>
      <section className="py-7 px-4 bg-gray-50 xl:px-0">
        <CountryList />
      </section>
      <FrontendMentorCopyright />
    </>
  );
}
