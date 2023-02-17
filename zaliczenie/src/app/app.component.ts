import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  title = 'zaliczenie';

  kategorie: string[] = [
    "Komputery",
    "Drukarki",
    "Kamery internetowe",
    "Inna elektronika"
  ];
  kategoria: string = this.kategorie[0];

  ilosc: number = 0;
  adres: string = "";

  pobierzAdres: (miasto: string, kod: string, ul: string, nr: number) => void
    = (miasto, kod, ulica, numer) => {
    this.adres = `${miasto} ${kod} ${ulica} ${numer}`;
  }
}

