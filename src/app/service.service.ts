import { User } from './home/domains/user';
import { Observable } from 'rxjs';
import { LojaComponent } from './loja/loja.component';
import { HomeComponent } from './home/home.component';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ServiceService {
  user: User;
  constructor() { }
getUser(){
  return this.user.name;
  }
}