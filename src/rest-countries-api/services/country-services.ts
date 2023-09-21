import { GetCountries, ServiceProvider } from "../entities/country-entity";

type Config = {
  serviceProvider: ServiceProvider;
};

export class CountryServices {
  constructor(private readonly config: Config) {}

  getCountries = async (props?: GetCountries) => {
    return this.config.serviceProvider.getCountries(props);
  };
}
