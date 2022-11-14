import {Component} from '@angular/core';
import {Osoba, Plec} from './interface';

@Component({
  selector: 'app-root',
  templateUrl: './index.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Projekt 05';
  osoba: Osoba= {
    imie:"Robert",
    nazwisko:"Lewandowski",
    zdjecie: "../assets/images/osoba.jpg",
    bez_zdjecia: "../assets/images/osoba2.jpg",
    adres: [`Drewniana`, `15`, `22-100`, `Chełm`],
    type: Plec.mezyczyzna
  }

  osoby = this.osoba.adres.map(el => { return el+" "; });

  samochod:string = "../assets/images/samochod.jpeg";
  drugi_samochod:string = "../assets/images/samochod2.jpg";

  pokaz_zdjecie:boolean=false;
  pokaz_samochod:boolean=false;

}
