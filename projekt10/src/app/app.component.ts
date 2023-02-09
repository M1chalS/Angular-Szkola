import {Component} from '@angular/core';
import {Rodzaj, Samochod} from './interfaceSamochod';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'projekt10';
  samochody:Samochod[] = [
    {
      marka: "brak",
      model: "wyboru",
      zdjecie: "https://ocs-pl.oktawave.com/v1/AUTH_2887234e-384a-4873-8bc5-405211db13a2/autoblog/2022/06/brak-samochodu-3.jpg",
      dane: ["brak danych"],
      typ: Rodzaj.brak
    },
    {
      marka: "Audi",
      model: "RS7",
      zdjecie: "https://fazicars.pl/wp-content/uploads/2022/04/AUDI-RS7-2.jpeg",
      dane: ["do setki 3,2sek.", "cena 0,7 mln zł"],
      typ: Rodzaj.sportowy
    },
    {
      marka: "Nissan",
      model: "Patrol",
      zdjecie: "https://bi.im-g.pl/im/61/b1/19/z26942561IER,Nissan-Patrol-Nismo.jpg",
      dane: ["do setki 8 sek.", "cena 400 tyś zł"],
      typ: Rodzaj.terenowy
    },
    {
      marka: "Mercedes",
      model: "Vario Mobil Sygnature",
      zdjecie: "https://i.ytimg.com/vi/6VAd6Z3HIiM/maxresdefault.jpg",
      dane: ["do setki 15 sek.", "cena 5 mln zł"],
      typ: Rodzaj.kamper
    },
  ];

  samochod:Samochod = this.samochody[0];

  pokaz_zdjecie:boolean = false;

  R=Rodzaj;

}
