import { createReducer, on } from '@ngrx/store';
import { LoginActions } from './login.actions';
import { ILoginState } from './login.model';

export const loginFeatureKey = 'loginState';

export const initialState: ILoginState = {
  token: null,
  isSuccess: false,
  isError: false,
  isLoading: false,
  error: null,
};

export const loginReducer = createReducer(
  initialState,
  on(
    LoginActions.setLoginToken,
    (state: ILoginState, { token, isSuccess, isLoading }) => {
      return { ...state, token: token, isSuccess: isSuccess, isLoading: isLoading, isError: false, error: null }
    }
  ),
  on(
    LoginActions.setLoginError,
    (state: ILoginState, { error }) => {
      return { ...state, token: null, isSuccess: false, isLoading: false, isError: true, error: error }
    }
  ),
  on(
    LoginActions.setLogout,
    () => {
      return initialState
    }
  )
);
