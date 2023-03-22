import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { CalculadoraModule } from './calculadora/calculadora.module';
import { CalculadoraModule } from './calculadora'; // arquivo calculadora/index.ts torna essa importação equivalente à importação acima! Apenas questões estéticas

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalculadoraModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
