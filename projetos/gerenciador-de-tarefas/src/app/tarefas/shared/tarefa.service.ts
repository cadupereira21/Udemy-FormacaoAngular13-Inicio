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

  buscarPorId(id: number){
    const tarefas = this.listarTodos();
    return tarefas.find(tarefa => tarefa.id === id);
    // find itera sobre a lista tarefas e para cada tarefa ele verifica se o id é igual ao id passado como parametro
  }

  atualizar(tarefa: Tarefa){
    const tarefas = this.listarTodos();
    tarefas.forEach((obj, index, objs) => {
      if(tarefa.id === obj.id) objs[index] = tarefa;
    });
    /**
     *obj = objeto tarefa dentro da lista tarefas,
     index = indice do objeto tarefa,
     objs = lista de tarefas  */
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  remover(id:number){
    let tarefas = this.listarTodos();
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  alterarStatus(id:number){
    const tarefas = this.listarTodos();
    tarefas.forEach((obj, index, objs) =>{
      if (obj.id === id) objs[index].concluida = !obj.concluida;
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }
}
