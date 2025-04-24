import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { ILoginState, SelectLoginSuccess } from '../+state/login';

export const loginGuard: CanActivateFn = (route, state) => {
  return inject(Store<ILoginState>)
    .select(SelectLoginSuccess)
    .pipe(map((isSuccess) => isSuccess));
};
