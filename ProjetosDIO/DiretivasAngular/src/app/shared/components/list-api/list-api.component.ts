import { Component, OnInit } from '@angular/core';
import { ListService } from '../../services/list.service';
@Component({
  selector: 'app-list-api',
  templateUrl: './list-api.component.html',
  styleUrls: ['./list-api.component.css']
})
export class ListApiComponent implements OnInit {
  personagens: Array<any> = [];

  constructor(private listService: ListService) { }

  ngOnInit(): void {
    this.getList();
  }
/*
  getList(){  
    this.listService.getList().subscribe(result => {
      this.personagens =  <any[]> result;

      console.log("qtde de personagens retornado da API:" + result.values);

      for (let i = 0; i < this.personagens.length; i++) {
        console.log("Lista de personagens via API:" + this.personagens);
      }
    })
  } */
  getList() {
    this.listService.getList().subscribe(result => {
      this.personagens = result?.results;
      console.log(this.personagens);
    })
  }

}
