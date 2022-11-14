export interface Osoba {
  imie: string;
  nazwisko: string;
  zdjecie: string;
  bez_zdjecia:string;
  adres:string[];
  type?:Plec;
}

export enum Plec {
  kobieta,
  mezyczyzna,
  niezdefiniowana
}
