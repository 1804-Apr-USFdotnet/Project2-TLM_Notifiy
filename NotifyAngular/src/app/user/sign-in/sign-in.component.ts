import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  isLoginError : boolean = false;

  //This component is using the userAuthentication method from the
  //user.service class so it need access to the UserService component.
  //Dependency injection is used here to do just that.
  constructor(private userService : UserService,private router : Router) { }

  ngOnInit() {
  }

  //Request a token
  OnSubmit(userEmail,password){
     this.userService.userAuthentication(userEmail,password).subscribe((data : any)=>{
      localStorage.setItem('userToken',data.access_token);
      //Once the user logs in, go the the home route
      this.router.navigate(['/home']); 
    },
    (err : HttpErrorResponse)=>{
      this.isLoginError = true;
    });
  }

}

//Approved
