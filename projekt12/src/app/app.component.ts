import { Component } from '@angular/core';
import { KalkulatorService } from "./kalkulator.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ KalkulatorService ],
})
export class AppComponent {
  title = 'projekt12';

  dodawanie:number=0;

  constructor(calc:KalkulatorService) {
    this.dodawanie = calc.dodaj(1, 4, 8, 3, 8, 4, 9, 1, 5, 7, 1, 4);
  }

}
