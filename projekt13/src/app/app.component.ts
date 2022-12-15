import {Component} from '@angular/core';
import {Dzialanie, KalkulatorService} from './kalkulator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projekt13';

  liczba1:number=0;
  liczba2:number=0;
  liczba3:number=0;
  liczba4:number=0;

  constructor(kalk:KalkulatorService) {
    this.liczba1 = kalk.oblicz(2, 2, Dzialanie.dodawanie)
    this.liczba2 = kalk.oblicz(8, 4, Dzialanie.odejmowanie)
    this.liczba3 = kalk.oblicz(2, 2, Dzialanie.mnozenie)
    this.liczba4 = kalk.oblicz(16, 4, Dzialanie.dzielenie)
  }

}
