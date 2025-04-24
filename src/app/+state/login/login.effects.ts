import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { catchError, map, Observable, of, switchMap } from 'rxjs';
import { LoginActions } from './login.actions';
import { ReqresApiService } from '../../services';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class LoginEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly reqService: ReqresApiService,
  ) {}

  getLoginToken$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(LoginActions.getLoginToken),
      switchMap((action) => {
        return this.reqService
          .getLoginTokenByEmailPassword$(action.email, action.password)
          .pipe(
            map(({ token }) =>
              LoginActions.setLoginToken({
                isLoading: false,
                isSuccess: true,
                token,
              }),
            ),
            catchError((err: HttpErrorResponse) =>
              of(LoginActions.setLoginError({ error: err.message })),
            ),
          );
      }),
    );
  });
}
