import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

interface Props {
  email: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  showMenuEmitter = new EventEmitter;

  baseUrl = "/api/auth/";
  constructor(private http: HttpClient) { }

  userAuthenticated({ email, password }: Props, token: string): Promise<any>{
    const headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
    const httpOptions = {
      headers: headers_object
    };

    return this.http.post(`${this.baseUrl}`, { email, password }, httpOptions).toPromise();
  }
}
