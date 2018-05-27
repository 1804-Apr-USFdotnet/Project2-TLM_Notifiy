import { HttpInterceptor, HttpRequest, HttpHandler, HttpUserEvent, HttpEvent, HttpResponse } from "@angular/common/http";
//import { Observable } from "rxjs/Observable";
//import 'rxjs/add/operator/do';
import { Observable } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';
import { UserService } from "../shared/user.service";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private router: Router) { }
    //intercept is a function
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //if the user is not authenticated
        if (req.headers.get('No-Auth') == "True")
            return next.handle(req.clone());

        //if the user is authenticated 
        if (localStorage.getItem('userToken') != null) {
            const clonedreq = req.clone({
                headers: req.headers.set("Authorization", "Bearer " + localStorage.getItem('userToken'))
            });
            return next.handle(clonedreq).pipe(
                tap(event => {
                    if(event instanceof HttpResponse){ }
                }, error => {
                    if (error.status === 401)
                        this.router.navigateByUrl('/login');                    
                })
            );
        }
        //if there is no token then redirect to login page
        else {
            this.router.navigateByUrl('/login');
        }
    }
}

/**
 * A token only has a limited amount of useful life, to extend 
 * the useful life of a auth token, we use interceptors.

//Line 29 => .pipe to line 33 code updated 
                 //.do(
                // succ => { },
                // err => {
                //     if (err.status === 401)
                //         this.router.navigateByUrl('/login');
                // }
                // );
 */

 //Approved
 