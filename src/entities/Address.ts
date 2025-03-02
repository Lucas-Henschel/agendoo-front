import type { City } from "./City";

export interface Address {
  id: number;
  cityEntity: City;
  publicPlace: string;
  locality: string;
  cep: string;
  complement: string;
  latitude: number;
  longitude: number;
}
