import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @Input() marka!:string;
  @Input() model!:string;
  @Input() dane!:string[];
  @Input() zdjecie!:string;
  @Input() pokaz_zdjecie!:boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
