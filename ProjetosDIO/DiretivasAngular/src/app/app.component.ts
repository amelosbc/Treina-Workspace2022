import { Component, OnInit } from '@angular/core';
import { PeopleService } from './shared/services/people.service';

@Component({
  selector: 'spa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  count = 0;
  text ='';
  nome = 'Alexandre S. Melo';

  pessoas = [
    { nome: "Alexandre", sobrenome: "Melo"},
    { nome: "Sabrina", sobrenome: "Melo"},
    { nome: "Gustavo", sobrenome: "Melo"},
    { nome: "Nicholas", sobrenome: "Melo"},
    { nome: "Alicia", sobrenome: "Melo"}
  ]

  pessoas2 = [
    {
      firstName: '',
      lastName: '',
      age: 0
    }
   ];

  // injetando o serviço
  constructor(private peopleService: PeopleService){
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    // chamada para iniciar a variavel
    this.getPeople();
    console.log(this.pessoas);

    let interval = setInterval(() => {
      this.count++;
      if(this.count === 10){
        clearInterval(interval);
      }
    },1000)
  }

  // teste de chamada do metodo pela view
  clicou (nome: string): void{
    console.log ('Clicou em min', nome);
  }

  getPeople(){
    this.peopleService.getPeople().subscribe(people => {
      this.pessoas2 = people;
    })
  }
}
