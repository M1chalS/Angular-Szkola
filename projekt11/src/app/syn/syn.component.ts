import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-syn',
  templateUrl: './syn.component.html',
  styleUrls: ['./syn.component.css']
})
export class SynComponent implements OnInit {

  @Input() zmiennaImport!:string;
  @Input() listaImport!:string;

  constructor() { }

  ngOnInit(): void {
  }

}
