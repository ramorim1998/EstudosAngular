import { ServiceService } from './../service.service';
import { User } from './../home/domains/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css']
})
export class LojaComponent implements OnInit {
  user: User;
  nome:string;
  total:number;
  constructor(private userService:ServiceService) {
    this.total = 0.00;
    
   }

  ngOnInit() {
    this.nome = this.user.name;
    this.getNome;
    console.log(this.nome);
  }
  getNome(): void{
    this.nome = this.userService.getUser();
  }
  addProduto(produto:number){
    this.total += produto +0.00;
    return this.total;
  }
}
