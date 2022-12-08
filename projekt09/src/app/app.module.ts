import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SynComponent } from './syn/syn.component';
import { CorkaComponent } from './corka/corka.component';
import { WnukComponent } from './corka/wnuk/wnuk.component';

@NgModule({
    declarations: [
        AppComponent,
        SynComponent,
        CorkaComponent,
        WnukComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    exports: [
        CorkaComponent,
        SynComponent,
        WnukComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
