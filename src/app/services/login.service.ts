import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Loginviewmodel } from '../viewmodels/loginviewmodel.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl:string="https://localhost:44312/api/User/";
  constructor(private http:HttpClient) { }

  Login(loginDetails:Loginviewmodel){
    return this.http.post<number>(this.baseUrl+'PostLogin', loginDetails);

  }
}