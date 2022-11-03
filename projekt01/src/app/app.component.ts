import { Component } from '@angular/core';
import {publish} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Projekt w Angularze wiązanie danych';
  imie:string = 'Dariusz';
  nazwisko:string = 'Torbacz';
  foto2 = "assets/obraz2.jpg";
  foto3 = "assets/obraz3.jpg";
  kolor = "yellow";
  srodek = 'center';

  zmien_kolor() {
    this.kolor = this.kolor === 'yellow' ? this.kolor = 'green' : this.kolor = 'yellow';
  }

  //dana:any = null;
  dana:number|null = null;

}

