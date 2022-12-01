import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Formularz';
  imie:string = "";
  nazwisko:string = "";

  wstaw(formValues:NgForm):void {
    console.log(formValues.form.value.name);
    console.log(formValues.form.value.last_name);
  }

}
