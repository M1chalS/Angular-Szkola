import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-syn',
  templateUrl: './syn.component.html',
  styleUrls: ['./syn.component.css']
})
export class SynComponent implements OnInit {

  @Input() zmiennaImport!:string[];
  @Output() odpowiedz_syna = new EventEmitter<string>();

  wysylanie():void {
    this.odpowiedz_syna.emit("Będę czekał");
  }

  constructor() { }

  ngOnInit(): void {
  }

}
