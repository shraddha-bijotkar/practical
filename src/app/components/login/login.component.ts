import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { User } from '../../models/user.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  users: User[] = [];
  loginForm!: FormGroup;
  isSubmitted = false;
  controls: any;
  constructor( private loginSerice: LoginService, private fb: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      id: [0, Validators.required],
      name: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  

  addUser(newUser: User) {
    console.log(newUser, 'newUser');
    this.loginSerice.post(newUser).subscribe({
      next: (data: any) => {
        console.log(data);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
    //this.getUsers();
  }

  onSubmit(loginForm: any) {
    if(!loginForm.valid) return;
    this.controls = loginForm.controls;
    this.isSubmitted = true;
    console.log(loginForm.value);
    this.addUser(loginForm.value);
  }

  
}
