import { Action, createReducer, on } from '@ngrx/store';
import { LoginActions } from '../actions/login.actions';
import { ILoginState } from '../interfaces/login.interface';

export const loginFeatureKey = 'login';

export const initialState: ILoginState = {
  token: null,
  isSuccess: false,
  error: null,
  isLoading: false
};

export const LoginReducer = createReducer(
  initialState,
  on(
    LoginActions.getLoginToken,
    (state: ILoginState, { email, password }) => {
      return { ...state, isLoading: true }
    }
  ),
  on(
    LoginActions.setLoginToken,
    (state: ILoginState, { token, isSuccess, isLoading }) => {
      return { ...state, token: token, isSuccess: isSuccess, isLoading: isLoading }
    }
  )
);
