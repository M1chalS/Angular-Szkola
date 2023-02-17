import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-adres',
  templateUrl: './adres.component.html',
  styleUrls: ['./adres.component.css']
})
export class AdresComponent implements OnInit {

  miasto: string = "";
  kod: string = "";
  ulica: string = "";
  numer: number = 0;

  @Input() wyslij: (miasto: string, kod: string, ul: string, nr: number) => void = () => {};

  onSubmit: any = () => {
      this.wyslij(this.miasto, this.kod, this.ulica, this.numer);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
