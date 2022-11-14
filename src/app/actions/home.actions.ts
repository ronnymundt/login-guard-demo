import { createActionGroup, emptyProps } from '@ngrx/store';

export const HomeActions = createActionGroup({
  source: 'Home',
  events: {
    'Logout': emptyProps()
  }
});




