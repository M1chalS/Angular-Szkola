import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KalkulatorService {

  constructor() {}

  dodaj(...liczby:number[]) : number {
    let suma=0;

    liczby.forEach((liczba) => {
      suma += liczba;
    });

    return suma;
  }

}
