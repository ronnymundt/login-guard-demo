import { Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { HomeComponent } from '../components/home/home.component';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { ILoginState } from '../interfaces/login.interface';
import { SelectLogin } from '../selectors/login.selectors';
import { map } from 'rxjs';

export class RouterPaths {         
    public routes: Routes = [
        { path: 'login', component: LoginComponent },
        { 
            path: 'home', 
            component: HomeComponent, 
            canActivate: [() => inject(Store<ILoginState>).select(SelectLogin).pipe(map((x: ILoginState) => x.isSuccess))] 
        },
        //
        { path: '**', redirectTo: 'login' }
    ]
}
