import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corka',
  templateUrl: './corka.component.html',
  styleUrls: ['./corka.component.css']
})
export class CorkaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy() : void {
    console.log("Zostałem zniszczony");
  }

}
