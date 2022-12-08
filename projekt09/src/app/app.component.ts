import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Podsumowanie';
  odp:string = "";

  zmiennaExport:string[] = ["17:00", "pływalnia"];

  odebranie_wiadomosci(otrzymane:string):void {
    alert("Syn powiedział: "+otrzymane);
  }

}
