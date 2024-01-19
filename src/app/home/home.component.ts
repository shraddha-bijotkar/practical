import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { User } from '../models/user.model';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  users: User[] = [];
  currentUsers: User[] = [];
  searchForm!: FormGroup;
  size: number = 2;
  constructor( private loginSerice: LoginService, private fb: FormBuilder) {}

  ngOnInit() {
    this.getUsers();

    this.searchForm = this.fb.group({
      search: ['']
    });
  }

  getUsers() {
    this.loginSerice.get().subscribe({
      next: (data: User[]) => {
        this.users = data;
        //this.currentUsers = this.users.slice(0,this.size);
        console.log(data);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
    //this.paginate();

  };

  // paginate() {
  //   console.log(this.currentUsers, 'cuur');

  //   for(let i=0; i<this.users.length-this.size; i++) {

  //     this.currentUsers = this.users.slice(i, i+this.size);

  //   }
  // }

  search(searchText: any) {
    this.searchForm = searchText;
  }

  paginator(event: any) {
    this.size = event.pageSize;
    console.log(event, 'pevent');
  }
}
