import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Prosty kalkulator';

  a:number = 0;
  b:number = 0;
  wynik:number|null = null;

  dodawanie() { this.wynik = this.a + this.b; }
  odejmowanie() { this.wynik = this.a - this.b; }
  mnozenie() { this.wynik = this.a * this.b; }
  dzielenie() { this.wynik = this.a / this.b; }

}
