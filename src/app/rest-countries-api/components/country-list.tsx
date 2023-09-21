import Image from "next/image";

import { countryServices } from "@/bootstrap/rest-countries-api";
import { CountryEntity } from "@/rest-countries-api/entities/country-entity";
import { GetCountries } from "@/rest-countries-api/entities/country-entity";

type CountryCardProps = {
  country: CountryEntity;
};

type Stats = { label: string; value: string | number };

type StatCardsProps = {
  stats: Stats[];
};

function StatCards({ stats }: StatCardsProps) {
  return (
    <div className="space-y-3">
      {stats.map((stat) => (
        <p className="space-x-2 text-xl" key={stat.label}>
          <span className="font-semibold">{stat.label}:</span>
          <span className="font-light">{stat.value}</span>
        </p>
      ))}
    </div>
  );
}

function CountryCard({ country }: CountryCardProps) {
  const stats = [
    { label: "Population", value: country.population },
    { label: "Region", value: country.region },
    { label: "Capital", value: country.capital },
  ];
  return (
    <article className="rounded-lg overflow-hidden bg-white shadow-xl shadow-gray-300">
      <div className="relative h-52">
        <Image
          src={country.flags.svg}
          alt={country.name?.common}
          className="object-cover"
          fill
        />
      </div>
      <div className="px-6 pt-8 pb-14 space-y-5">
        <h2 className="font-extrabold text-3xl">{country.name?.common}</h2>
        <StatCards stats={stats} />
      </div>
    </article>
  );
}

export async function CountryList(props?: GetCountries) {
  const countries = await countryServices.getCountries(props);

  return (
    <div className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {countries.map((country) => (
        <CountryCard key={country.name?.common} country={country} />
      ))}
    </div>
  );
}
