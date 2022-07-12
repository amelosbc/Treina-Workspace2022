import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css']
})
export class UsersFormComponent implements OnInit {

  userForm: FormGroup;
  userId: String = '';
  
  constructor(private fb: FormBuilder, private userService: UserService,
              private actRoute: ActivatedRoute,
              private router: Router) { 
    this.userForm = this.fb.group({
      id: 5,
      nome: '',
      sobrenome: '',
      idade: 0,
      profissao: ''
    })
  }

  ngOnInit(): void {

  }

  createUser(){
    this.userService.postUser(this.userForm.value).subscribe(result => {
      console.log('Usuário ${result.nome} ${result.sobrenome}Cadastrado com Sucesso !');
    })
  }



}
