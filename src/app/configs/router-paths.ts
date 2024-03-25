import { Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { HomeComponent } from '../components/home/home.component';
import {loginGuard} from "../guards";

export const routerPaths: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [loginGuard]
  },
  //
  { path: '**', redirectTo: 'login' }
]
