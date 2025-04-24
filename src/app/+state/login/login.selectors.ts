import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ILoginState } from './login.model';
import { loginFeatureKey } from './login.reducer';

export const SelectLoginState =
  createFeatureSelector<ILoginState>(loginFeatureKey);
export const SelectLogin = createSelector(
  SelectLoginState,
  (state: ILoginState) => state,
);

export const SelectLoginSuccess = createSelector(
  SelectLoginState,
  (state: ILoginState) => state.isSuccess,
);

export const SelectLoginError = createSelector(
  SelectLoginState,
  (state: ILoginState) => state.error,
);
