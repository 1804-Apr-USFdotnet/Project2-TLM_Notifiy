import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { AuthGuard } from './auth/auth.guard';
import { TaskComponent } from './home/task/task.component';
import { BillComponent } from './home/bill/bill.component';

export const appRoutes: Routes = [
    //The home component requires authentication
    //canActicate is implemented in auth.guard.ts file
    { 
        path: 'home', component: HomeComponent,canActivate:[AuthGuard]
    },
    {
        path: 'tasks', component: HomeComponent, canActivate:[AuthGuard],
        children: [{ path: '', component: TaskComponent }]
    },

    {
        path: 'bills', component: HomeComponent, canActivate:[AuthGuard],
        children: [{ path: '', component: BillComponent }]
    },

    //These routes do not need authentication
    {
        //When signup url is used it will load two components: UserComponent and SignUpComponent
        //UserComponent is the parent and SignUp is the child component
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },

    { path : '', redirectTo:'/login', pathMatch : 'full'}
    
];
