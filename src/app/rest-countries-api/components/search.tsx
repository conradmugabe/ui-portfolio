"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

import { IoMdSearch } from "react-icons/io";
import { BsChevronDown } from "react-icons/bs";

export function SearchByName() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (search) router.push(`/rest-countries-api/results/${search}`);
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

function SearchByRegion() {
  return (
    <div className="h-16 bg-white py-4 px-9 flex items-center gap-5 rounded-md shadow-xl shadow-gray-300">
      <p className="whitespace-nowrap">Filter by Region</p>
      <BsChevronDown className="stroke-black stroke-1" size={14} />
    </div>
  );
}

export function Search() {
  return (
    <section className="py-7 px-4 bg-gray-50 xl:px-0">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-start gap-10 md:flex-row md:justify-between">
          <SearchByName />
          <SearchByRegion />
        </div>
      </div>
    </section>
  );
}
