import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CorkaComponent } from './corka/corka.component';
import { WnukComponent } from './corka/wnuk/wnuk.component';
import { SynComponent } from './syn/syn.component';
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    CorkaComponent,
    WnukComponent,
    SynComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgForOf,
    FormsModule,
    FormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
