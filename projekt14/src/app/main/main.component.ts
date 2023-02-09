import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  @Input() name!: string;
  @Input() image!: string;
  @Input() weight!: number;
  @Input() height!: number;
}
