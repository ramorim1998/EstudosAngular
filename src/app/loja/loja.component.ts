import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css']
})
export class LojaComponent implements OnInit {
  total:number;
  constructor() {
    this.total = 0;
   }

  ngOnInit() {
  }
  addProduto(produto:number){
    this.total += produto;
  }
}
