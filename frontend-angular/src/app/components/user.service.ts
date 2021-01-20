import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Group } from '../database/models/group';
import { User } from '../database/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  findAllGroups(): Observable<Group[]> {
    return this.http.get<Group[]>(`${this.baseUrl}/group`);
  }

  create(user: User){
    this.http.post(`${this.baseUrl}/user`, user).toPromise();
  }
}
