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
    if (search && search.length > 0) params += `/name/${search}`;
    if (region && region.length > 0) params += `/region/${region}`;
    return this.getMany(params);
  };
}
