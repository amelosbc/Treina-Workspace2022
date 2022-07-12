import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  text = 'Alexandre S Melo';
  imgURL = 'https://picsum.photos/300/300';
  descIMG = 'Imagem aleatoria 300x300';
  buttonText = 'Clique aqui';
  textRed = false;
  textInput = '';
  
  constructor() { }

  ngOnInit(): void {
  }

  retornaNome(){
    return this.text;
  }

  clicouAlgo(){
    console.log('clicou em algo');
  }

  clicou(value: any){
    console.log('clicou em algo', value);
    this.textRed = true;
  }


}
