import { User } from './home/domains/user';
import { Observable } from 'rxjs';
import { LojaComponent } from './loja/loja.component';
import { HomeComponent } from './home/home.component';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
// classe service que fornece comunicação entre Home e Loja
export class ServiceService {
  user: User;
  constructor() {
    
   }
// metodo de retorno do nome do usuario para uso na loja
getUser(){
  return this.user.name;
  }
// metodo de cadastro do usuario
  cadastraUser(user:User){
    this.user = user;
  }
}
