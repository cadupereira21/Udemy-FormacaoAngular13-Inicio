import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../services';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit{

  private numero1:string;
  private numero2:string;
  private resultado:number;
  private operacao:string;
  /*
  parametro CalculadoraService abaixo caracteriza uma injeção de independencia,
  uma vez que CalculadoraService possui a notação @Injectable
  */
  constructor(private calculadoraService : CalculadoraService) {}
  ngOnInit(): void {
    this.limpar();
  }

  limpar():void{
    this.numero1='0';
    this.numero2=null;
    this.resultado=null;
    this.operacao=null;
  }

  adicionarNumero(num:string):void{

    /*
    if(this.operacao === null) this.numero1 = this.concatenarNumero(this.numero1, num);
    else this.numero2 = this.concatenarNumero(this.numero2, num);
    */
    let actualDigit:string;
    if(this.operacao === null) actualDigit = this.numero1;
    else actualDigit = this.numero2;

    actualDigit = this.concatenarNumero(actualDigit, num);
  }

  concatenarNumero(numAtual:string, numConcat:string):string {
    if(numAtual === '0' || numAtual === null) numAtual = '';
    if(numConcat === '.' && numAtual === '') return '0.';
    if(numConcat === '.' && numAtual.indexOf('.') > -1) return numAtual
    return numAtual + numConcat;
  }
}
