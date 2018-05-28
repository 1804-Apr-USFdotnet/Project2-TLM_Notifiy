import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from "@angular/http";
import { Observable } from 'rxjs';

import { RegisterBindingModel } from './user.model';
import { TaskItem } from './taskitem.model';

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
    return this.http.post(this.rootUrl+'/api/Account/Register', body ,{headers : reqHeader});
  }

  //This is similar to what we did in PostMan
  //This function returns an absorver
  userAuthentication(userEmail, password) {
    var data = "username=" + userEmail + "&password=" + password + "&grant_type=password";
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded','No-Auth':'True' });
    return this.http.post(this.rootUrl+'/token', data, { headers: reqHeader });
  }

  //Making API http get request
  getUserInfo(){
   return  this.http.get(this.rootUrl+'/api/Account/UserInfo');
  }

  /**********************TaskItem**********************/

  //GET api/TaskItem
  getAllTaskItems(){
    return this.http.get(this.rootUrl+'/api/TaskItem');
  }

  //GET api/TaskItem/{id}	 
  getOneTaskItem(id : Number){
    return this.http.get(this.rootUrl+'/api/TaskItem/'+id);    
  }

  //PUT api/TaskItem/{id}
  putTaskItem(id: Number, postedTask: TaskItem){
    return this.http.put(this.rootUrl+'/api/TaskItem/'+id, postedTask);
  }

  //POST api/TaskItem	
  postTaskItem(postedTask: TaskItem){
    return this.http.post(this.rootUrl + '/api/TaskItem', postedTask);
  }

  //DELETE api/TaskItem/{id}
  deleteTaskItem(id : Number){
    return this.http.delete(this.rootUrl + '/api/TaskItem/'+id);
  }

  
  /**********************BillItem**********************/
  //GET api/BillItem
  //GET api/BillItem/{id}	
  //PUT api/BillItem/{id}
  //POST api/BillItem
  //DELETE api/BillItem/{id}

}


//Approved


