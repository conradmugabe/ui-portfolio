export type CountryEntity = {
  name: { common: string; official: string };
  flags: { png: string; svg: string };
  population: number;
  region: string;
  capital: string;
};

export type GetCountries = {
  search?: string;
  region?: string;
};

export interface ServiceProvider {
  getCountries(props?: GetCountries): Promise<CountryEntity[]>;
}
