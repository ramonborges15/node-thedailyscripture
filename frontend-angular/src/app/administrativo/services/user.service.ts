import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { UserCreateDTO } from '../dtos/UserCreateDTO';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = "/api/users/";

  constructor(private http: HttpClient) { }

  create(userCreateDTO: UserCreateDTO){
    this.http.post(`${this.baseUrl}`, userCreateDTO).toPromise();
  }

  findAll(): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}`);
  }

  readById(id: string | null): Observable<User>{
    return this.http.get<User>(`${this.baseUrl}/${id}`);
  }

  update(user: User): Observable<User>{
    const id = user.id;
    return this.http.put<User>(`${this.baseUrl}/${id}`, user);
  }
}
