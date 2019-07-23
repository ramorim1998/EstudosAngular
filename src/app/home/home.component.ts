import { User } from './domains/user';
import { ServiceService } from './../service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, MinLengthValidator } from '@angular/forms';
import {Router} from '@angular/router';
import { equal } from 'assert';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userForm: FormGroup;
  service : ServiceService;
  router: Router;
  constructor(router: Router, private formBuilder: FormBuilder, service: ServiceService) { 
    this.router = router;
    this.service = service;
  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      cpf: [null, Validators.required],
      senha: [null, [Validators.required, Validators.minLength(5)]],
      confirm: [null,[Validators.required, Validators.minLength(5)]]
    })
  }
  dadosUser() : User{
    const user:User = {
      name: this.userForm.get('name').value,
      cpf: this.userForm.get('cpf').value,
      email: this.userForm.get('email').value,
      password: this.userForm.get('senha').value,
      confirm: this.userForm.get('confirm').value
    }
    return user;
  }


  enviarForm(){
    if(this.userForm.invalid == true || ! this.userForm[3] === this.userForm[4]){
      alert("Preencha corretamente o formulario de cadastro");
    }else{
      this.router.navigate(['/','loja']);
    }
    this.service.cadastraUser(this.dadosUser());
    console.log(this.userForm.getRawValue());
  }
  
}
