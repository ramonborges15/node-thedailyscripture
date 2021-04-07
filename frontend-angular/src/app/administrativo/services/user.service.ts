import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  create(user: User){
    this.http.post(`${this.baseUrl}/user`, user).toPromise();
  }

  findAll(): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}/user`);
  }

  readById(id: string | null): Observable<User>{
    return this.http.get<User>(`${this.baseUrl}/user/${id}`);
  }

  update(user: User): Observable<User>{
    const id = user.id;
    return this.http.put<User>(`${this.baseUrl}/user/${id}`, user);
  }
}
