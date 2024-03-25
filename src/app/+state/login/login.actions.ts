import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const LoginActions = createActionGroup({
  source: 'Login',
  events: {
    'Get Login Token': props<{ email: string, password: string }>(),
    'Set Login Token': props<{ token: string, isSuccess: boolean, isLoading: boolean }>(),
    'Set Login Error': props<{ error: string }>(),
    'Set Logout': emptyProps()
  }
});
