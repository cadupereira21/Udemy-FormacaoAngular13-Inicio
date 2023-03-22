import { Injectable } from '@angular/core';
import { Tarefa } from './tarefa.model';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  listarTodos(): Tarefa[]{
    /* 
    localStorage = array chave:valor
    Ao ser utlizado pela primeira vez, o localStorage retornará um valor inválido, portanto é necessária a verificação do operador ternário
    */
    const tarefas = localStorage['tarefas'];
    return tarefas ? JSON.parse(tarefas) : []; 
  }

  cadastrar(tarefa: Tarefa){
    const tarefas = this.listarTodos();
    tarefa.id = new Date().getTime();
    tarefas.push(tarefa);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  // buscarPorId(id: number){
  //   const tarefas = this.listarTodos();
  //   return tarefas.find(tarefa =>)
  // }
}
