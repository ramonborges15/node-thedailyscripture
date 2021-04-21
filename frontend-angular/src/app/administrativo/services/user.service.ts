import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

}
