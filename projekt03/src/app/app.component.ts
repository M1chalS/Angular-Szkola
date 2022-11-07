import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Kalkulator';
  wyswietlacz:string = '';
  pierwszaCzesc:number = 0;
  drugaCzesc:number = 0;
  dzialanie:string = '';
  wynik:number = 0;
  przecinek:boolean = false;

  wyswietl(i:any) : void
  {
    if(this.przecinek && i === ".")
      return;

    if(i === ".")
      this.przecinek = true;

    this.wyswietlacz += i;
  }

  przelicz(znak:string)
  {
    this.pierwszaCzesc = parseFloat(this.wyswietlacz);
    this.wyswietlacz = '';
    this.dzialanie = znak;
    this.przecinek = false;
  }

  licz() {
    this.drugaCzesc = parseFloat(this.wyswietlacz);
    if (this.dzialanie != "") {
      switch (this.dzialanie) {
        case "+":
          this.wynik = this.pierwszaCzesc + this.drugaCzesc;
          break;
        case "-":
          this.wynik = this.pierwszaCzesc - this.drugaCzesc;
          break;
        case "*":
          this.wynik = this.pierwszaCzesc * this.drugaCzesc;
          break;
        case "/":
          this.wynik = this.pierwszaCzesc / this.drugaCzesc;
          break;
      }
    }
    this.wyswietlacz = this.wynik.toString();
    this.pierwszaCzesc = this.wynik;
    this.przecinek = false;
    this.dzialanie = "";

  }

  wyczysc() {
    this.dzialanie = "";
    this.przecinek = false;
    this.pierwszaCzesc = 0;
    this.drugaCzesc = 0;
    this.wyswietlacz = "";
    this.wynik = 0;
  }

}
