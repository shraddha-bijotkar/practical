import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/dist/types/internal/Observable';
import { Observable } from 'rxjs-compat/Observable';
import { User } from '../models/user.model';

const url = 'http://localhost:3004/users';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    return this.http.get(url);
  }

  post(user: User): Observable<any> {
    return this.http.post(url, user);
  }
}
