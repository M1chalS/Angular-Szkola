import { Component, OnInit } from '@angular/core';
import { KalkulatorService } from "../kalkulator.service";

@Component({
  selector: 'app-syn',
  templateUrl: './syn.component.html',
  styleUrls: ['./syn.component.css']
})
export class SynComponent implements OnInit {

  dodawanie:number=0;

  constructor(kalk:KalkulatorService) {
    this.dodawanie = kalk.dodaj(4,7,5,3,2,8,6,5);
  }

  ngOnInit(): void {
  }

}
