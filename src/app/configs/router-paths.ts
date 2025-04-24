import { Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { loginGuard } from '../guards';

export const routerPaths: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    loadComponent: () =>
      import('../components/home/home.component').then((m) => m.HomeComponent),
    canActivate: [loginGuard],
  },
  //
  { path: '**', redirectTo: 'login' },
];
