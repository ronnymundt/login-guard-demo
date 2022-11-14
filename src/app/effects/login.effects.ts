import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { catchError, map, mergeMap, Observable, of } from 'rxjs';
import { LoginActions } from '../actions/login.actions';
import { ReqresApiService } from '../services/reqres-api.service';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class LoginEffects {
  constructor(
    private _actions$: Actions,
    private _reqService: ReqresApiService
  ) {}

  public getLoginToken$: Observable<Action> = createEffect(() => {
    return this._actions$.pipe(
      ofType(LoginActions.getLoginToken),
      mergeMap((action) => {
        return this._reqService.getLoginTokenByEmailPassword$(action.email, action.password).pipe(
          map((token: string) => {
            return LoginActions.setLoginToken({ isLoading: false, isSuccess: true, token: token });
          }), catchError((err: HttpErrorResponse) => {
            return of(LoginActions.setLoginError({ error: err.message }));
          }));
      }));
  });
}
