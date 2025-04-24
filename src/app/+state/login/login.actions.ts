import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const LoginActions = createActionGroup({
  source: 'Login',
  events: {
    GetLoginToken: props<{ email: string; password: string }>(),
    SetLoginToken: props<{
      token: string;
      isSuccess: boolean;
      isLoading: boolean;
    }>(),
    SetLoginError: props<{ error: string }>(),
    SetLogout: emptyProps(),
  },
});
