export interface Samochod {
  marka:string;
  model:string;
  zdjecie:string;
  dane:string[];
  typ:Rodzaj;
}

export enum Rodzaj {
  sportowy,
  terenowy,
  kamper,
}
