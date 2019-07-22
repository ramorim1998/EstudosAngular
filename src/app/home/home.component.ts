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
  router: Router;
  constructor(router: Router, private formBuilder: FormBuilder) { 
    this.router = router;
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
  enviarForm(){
    if(this.userForm.invalid == true || ! this.userForm[3] === this.userForm[4]){
      alert("Preencha corretamente o formulario de cadastro");
    }else{
      this.router.navigate(['/','loja']);
    }
  }

}
