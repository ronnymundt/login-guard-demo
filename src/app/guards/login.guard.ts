import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { ILoginState } from '../interfaces/login.interface';
import { SelectLogin } from '../selectors/login.selectors';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(
    private _store: Store<ILoginState>
    ) { }

  canActivate(): Observable<boolean> {
    return this._store.select(SelectLogin).pipe(map((x: ILoginState) => x.isSuccess));
  }  
}
