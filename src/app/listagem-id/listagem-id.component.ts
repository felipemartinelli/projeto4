import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../model/Tarefa';
import { TarefaService } from '../service/tarefa.service';

@Component({
  selector: 'app-listagem-id',
  templateUrl: './listagem-id.component.html',
  styleUrls: ['./listagem-id.component.css']
})
export class ListagemIdComponent implements OnInit {

  private idBusca:number;
  private _msgErro: string = null;
  private _tarefa: Tarefa=null;

  constructor(private tarefaSrv: TarefaService) { }

  ngOnInit() {
  }

  private pesquisar(){
    if (this.idBusca <= 0){
      this._msgErro = "Digite um numero valido";
      this._tarefa = null;
    }
    else{ 
      this._msgErro = null;
      this.tarefaSrv.recuperaTarefaPeloID(this.idBusca).subscribe((res: Tarefa) => {
        this._tarefa = res;
        console.log(this._tarefa);
      });
    }   
  }
}