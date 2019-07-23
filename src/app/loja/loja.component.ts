import { ServiceService } from './../service.service';
import { User } from './../home/domains/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css']
})
//classe de Loja e metodos de adição de valores ao carrinho
export class LojaComponent implements OnInit {
  user: User;
  nome:string;
  total:number;
  constructor(private userService:ServiceService) {
    this.total = 0.00;
    
   }
   // inicialização do nome de usuario atraves de metodo com o service
  ngOnInit() {
    this.setNome();
  }
  // metodo de set do nome de usuario na pagina da loja
  setNome(): void{
    this.nome = this.userService.getUser();
  }
  // metodo de adição de valores no carrinho apartir de clicks nos objetos a serem comprados
  addProduto(produto:number){
    this.total += produto +0.00;
    return this.total;
  }
}
