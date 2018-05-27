import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from "@angular/http";
import { Observable } from 'rxjs';

import { RegisterBindingModel } from './user.model';

@Injectable({
  providedIn: 'root'  //Didn't have this
})
export class UserService {
  readonly rootUrl = 'http://localhost:52739';
  constructor(private http: HttpClient) { }

  registerUser(user: RegisterBindingModel) {
    const body: RegisterBindingModel = {
      Email: user.Email,
      Password: user.Password,
      ConfirmPassword: user.ConfirmPassword
    }
    var reqHeader = new HttpHeaders({'No-Auth':'True'});  //original
    return this.http.post(this.rootUrl + '/api/Account/Register', body ,{headers : reqHeader});
  }

  //This is similar to what we did in PostMan
  //This function returns an absorver
  userAuthentication(userEmail, password) {
    var data = "username=" + userEmail + "&password=" + password + "&grant_type=password";
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded','No-Auth':'True' });
    return this.http.post(this.rootUrl + '/token', data, { headers: reqHeader });
  }

  //Making API http get request
  getUserClaims(){
   return  this.http.get(this.rootUrl+'/api/Account/UserInfo');
  }

}

//Approved


