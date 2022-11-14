import { createReducer, on } from '@ngrx/store';
import { LoginActions } from '../actions/login.actions';
import { ILoginState } from '../interfaces/login.interface';

export const loginFeatureKey = 'login';

export const initialState: ILoginState = {
  token: null,
  isSuccess: false, 
  isError: false,
  isLoading: false,
  error: null,
};

export const LoginReducer = createReducer(
  initialState,
  on(
    LoginActions.getLoginToken,
    (state: ILoginState, { email, password }) => {
      return { ...state, isLoading: true, error: null, isError: false, isSuccess: false, token: null }
    }
  ),
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
    (state: ILoginState) => {
      return { ...state, isLoading: false, error: null, isError: false, isSuccess: false, token: null }
    }
  )
);
