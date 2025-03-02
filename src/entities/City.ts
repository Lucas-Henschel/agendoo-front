import type { State } from "./State";

export interface City {
  id: number;
  stateEntity: State;
  name: string;
}
