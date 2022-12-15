import {Component, OnInit} from '@angular/core';
import {Dzialanie, KalkulatorService} from "../kalkulator.service";

@Component({
  selector: 'app-syn',
  templateUrl: './syn.component.html',
  styleUrls: ['./syn.component.css']
})
export class SynComponent implements OnInit {

  liczbaa:number=0;

  constructor(kalk:KalkulatorService) {
    this.liczbaa = kalk.oblicz(2, 6, Dzialanie.odejmowanie)
  }

  ngOnInit(): void {
  }

}
