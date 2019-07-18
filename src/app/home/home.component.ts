import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userForm: FormGroup;

  constructor(    private formBuilder: FormBuilder,    ) { 
  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      cpf: [null, Validators.required],
      senha: [null, Validators.required],
      confirm: [null,Validators.required]
    })
  }
  enviarForm(){
    alert("aaaa");
    console.log(this.userForm.getRawValue());
  }

}
