import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = "/api/users/";

  constructor(private http: HttpClient) { }

  userAuthenticated(user: User): Promise<any>{
    return this.http.get(`${this.baseUrl}/auth?email=${user.email}&password=${user.password}`).toPromise();
  }
}
