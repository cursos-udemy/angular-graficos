import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { LineaComponent } from './components/linea/linea.component';

@NgModule({
  declarations: [
    AppComponent,
    LineaComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule
    //HTTPCLIENTEMODULE y FORMSMODULE????
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
