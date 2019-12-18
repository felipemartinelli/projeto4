import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../model/Tarefa';
import { TarefaService } from '../service/tarefa.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  constructor(private tarefaService: TarefaService) { }

  tarefas: Tarefa[];

  ngOnInit() {
    this.acharTodos();
  }

  acharTodos(){
    this.tarefaService.retornaTodas().subscribe((tarefaOut: Tarefa[]) => this.tarefas = tarefaOut);
    console.log(this.tarefas);
    }

} 