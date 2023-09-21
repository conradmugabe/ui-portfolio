"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

import { IoMdSearch } from "react-icons/io";
import { BsChevronDown } from "react-icons/bs";
import classnames from "classnames";

import { regions } from "../data";
import { GetCountries } from "@/rest-countries-api/entities/country-entity";

export function SearchByName({ region = "" }: { region?: string }) {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(`/rest-countries-api/results?search=${search}`);
    setSearch("");
  };

  return (
    <form
      className="h-16 bg-white py-4 px-9 w-full flex items-center gap-5 rounded-md shadow-xl shadow-gray-300 md:w-auto"
      onSubmit={handleSubmit}
    >
      <IoMdSearch size={28} />
      <input
        type="text"
        placeholder="Search for a country..."
        className="bg-white w-full h-full px-2 rounded-sm text-base"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
}

function SearchByRegion({ search, region }: GetCountries) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const toggle = () => setOpen((prev) => !prev);

  const onClick = (_region: string) => {
    const __region = region === _region ? "" : _region;
    router.push(`/rest-countries-api/results?region=${__region}`);
    setOpen(false);
  };

  return (
    <div className="relative">
      <button
        className="h-16 bg-white py-4 px-9 flex items-center gap-5 rounded-md shadow-xl shadow-gray-300"
        onClick={() => toggle()}
      >
        <p className="whitespace-nowrap">Filter by Region</p>
        <BsChevronDown className="stroke-black stroke-1" size={14} />
      </button>
      <div
        className={classnames(
          "absolute w-full mt-2 grid rounded-md shadow-xl bg-white z-10",
          { hidden: !open },
        )}
      >
        {regions.map((region) => (
          <button
            key={region}
            onClick={() => onClick(region)}
            className="capitalize text-left pr-4 pl-14 h-10 hover:bg-gray-200"
          >
            {region}
          </button>
        ))}
      </div>
    </div>
  );
}

export function Search({ search, region }: GetCountries) {
  return (
    <section className="py-7 px-4 bg-gray-50 xl:px-0">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-start gap-10 md:flex-row md:justify-between">
          <SearchByName region={region} />
          <SearchByRegion search={search} region={region} />
        </div>
      </div>
    </section>
  );
}
