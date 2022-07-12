import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiURL = "https://sheet.best/api/sheets/df68a49e-a8a2-491c-bea9-7b65cbfd4e03";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Token': '12323242323',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Content-Type, Authorization',
      'Access-Control-Allow-Methods': '*',  
    })
  }

  constructor(private httpClient: HttpClient) { }

  // CRUD - CREATE, READ, UPDATE, DELETE

  // return list of users
  getUsers(): Observable<User[]>{
    return this.httpClient.get<User[]>(this.apiURL);
  }

  postUser(user: User): Observable<User>{
    return this.httpClient.post<User>(this.apiURL,user, this.httpOptions);
  }

  //exclui o usuario no banco
  deleteUser(id: string): Observable<User> {
    return this.httpClient.delete<User>('${this.apiURL}/id/${id}')

  }
}
