import { CountryServices } from "@/rest-countries-api/services/country-services";
import { HttpServiceProvider } from "@/rest-countries-api/providers/http-service-provider";
import { CountryEntity } from "@/rest-countries-api/entities/country-entity";

const serviceProvider = new HttpServiceProvider({
  baseUrl: "https://restcountries.com/v3.1",
});

export const countryServices = new CountryServices({ serviceProvider });
