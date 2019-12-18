import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor(private http: HttpClient) { }

  retornaTodas(){
    return this.http.get("https://jsonplaceholder.typicode.com/todos");
  }

  recuperaTarefaPeloID(id:number){
    return this.http.get("https://jsonplaceholder.typicode.com/todos/"+id);
    
  }

}