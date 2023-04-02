import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Auth } from '../models/auth.model';
import { CreateUserDTO } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  login(email: string, password: string) {
    return this.http.post(`${environment.apiUrl}auth/login`, { email, password });
  }
  profile(token: string):Observable<Auth> {
    return this.http.get<Auth>(`${environment.apiUrl}auth/profile`);
  }
}
