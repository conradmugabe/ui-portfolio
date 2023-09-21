import {
  CountryEntity,
  GetCountries,
  ServiceProvider,
} from "../entities/country-entity";

type Config = {
  baseUrl: string;
};

export class HttpServiceProvider implements ServiceProvider {
  constructor(private readonly config: Config) {}

  private getMany = async (params: string) => {
    console.log("params", params);
    const response = await fetch(`${this.config.baseUrl}${params}`);
    const data = await response.json();
    return data;
  };

  getCountries = ({
    region,
    search,
  }: GetCountries): Promise<CountryEntity[]> => {
    if (!search && !region) {
      return this.getMany("/all");
    }
    let params = "";
    const isSearchingByName = search && search.length > 0;
    const isSearchingByRegion = region && region.length > 0;
    if (isSearchingByName) params += `/name/${search}`;
    if (isSearchingByRegion && isSearchingByName) params += `&region/${region}`;
    if (isSearchingByRegion && !isSearchingByName)
      params += `/region/${region}`;
    return this.getMany(params);
  };
}
