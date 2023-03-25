import { Routes } from '@angular/router';
import { ListarTarefaComponent } from './listar-tarefa';
import { CadastrarTarefasComponent } from './cadastrar-tarefas';

export const TarefaRoutes: Routes = [
    {
        path: 'tarefas',
        redirectTo: 'tarefas/listar'
    },
    {
        path: 'tarefas/listar',
        component: ListarTarefaComponent
   },
   {
    path:'tarefas/cadastrar',
    component: CadastrarTarefasComponent
   }
]