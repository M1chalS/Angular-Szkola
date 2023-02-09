import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  title = 'projekt14';

  lista: any[] = [
    {
      nazwa: "Harry Potter",
      zdjecie: "https://ocdn.eu/images/pulscms/MzQ7MDA_/524fc1897df0ee2d59d83bec20a2ebd2.jpg",
      waga: 69,
      wzrost: 182
    },
    {
      nazwa: "Voldemort",
      zdjecie: "https://bi.im-g.pl/im/14/22/e6/z15082004Q,Voldemort.jpg",
      waga: 52,
      wzrost: 190
    },
    {
      nazwa: "Hagrid",
      zdjecie: "https://ostatniatawerna.pl/wp-content/uploads/2017/12/hagrid.jpg",
      waga: 131,
      wzrost: 185
    }
  ];

  postac = this.lista[0];

  red: number = 0;
  green: number = 0;
  blue: number = 0;

  zmienTlo(): void {
    document.body.style.backgroundColor = `rgb(${ this.red }, ${ this.green }, ${ this.blue })`;
  }
}
