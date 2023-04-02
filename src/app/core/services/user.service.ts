import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { CreateUserDTO } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  
  create(userDto:CreateUserDTO)
  {
    return this.http.post(`${environment.apiUrl}/users`,userDto);
  }
  getAll()
  {
    return this.http.get(`${environment.apiUrl}/users`);
  }
}
