import { registerUserDto } from './../interface/userRegister';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string = environment.API_URL + '/api/users';

  constructor(private http: HttpClient) { }

  registerUser(userData: registerUserDto) {
    console.log(userData);
    return this.http.post(`${this.baseUrl}/register`, userData);
  }
}
