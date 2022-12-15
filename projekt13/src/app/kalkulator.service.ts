import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KalkulatorService {

  constructor() {}
  oblicz(x:number, y:number, dzial:Dzialanie) : number {
    switch (dzial)
    {
      case Dzialanie.dodawanie: return x+y;
      case Dzialanie.odejmowanie: return x-y;
      case Dzialanie.mnozenie: return x*y;
      case Dzialanie.dzielenie: return x/y;
    }

  }

}

export enum Dzialanie {
  dodawanie,
  odejmowanie,
  mnozenie,
  dzielenie

}


