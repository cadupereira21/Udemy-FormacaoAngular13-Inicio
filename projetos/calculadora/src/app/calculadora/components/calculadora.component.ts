import { Component } from '@angular/core';
import { CalculadoraService } from '../services';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  /*
  parametro CalculadoraService abaixo caracteriza uma injeção de independencia, uma vez que CalculadoraService possui a notação @Injectable*/
  constructor(private calculadoraService : CalculadoraService) {}
}
