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
    const response = await fetch(this.config.baseUrl + params);
    const data = await response.json();
    return data;
  };

  getCountries = (props?: GetCountries): Promise<CountryEntity[]> => {
    let params = "";
    if (!props) {
      params = "/all";
      return this.getMany(params);
    }
    if (props?.search) params += `/name/${props.search}?fullText=true`;
    if (props?.region) params += `/region/${props.region}`;
    return this.getMany(params);
  };
}
