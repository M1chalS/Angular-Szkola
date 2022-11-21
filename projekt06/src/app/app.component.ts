import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projekt06';

  kursy:string[] = [
    'Programowanie w C#',
    'Angular dla początkujących',
    'Kurs Django',
  ];

  name:string = '';
  numer_kursu:number|null = null;

  Wstaw() : void {
    console.log(this.name);

    let nr

    if(this.numer_kursu != null)
    {
      nr = this.numer_kursu-1;

      if(nr >= 0 && nr < this.kursy.length)  {
        console.log(nr);
      }
      else {
        console.log("Nie poprawny numer kursu");
      }

    }


  }
}
