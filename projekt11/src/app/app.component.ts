import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projekt11';
  zmiennaExport:string = "Przesyłanie informacji";

  lista:string[] = [
    'aaaa',
    'bbbb',
    'cccc',
    'dddd',
  ];

  wybor:string = "essa";

  decyzja:string = "";
}
