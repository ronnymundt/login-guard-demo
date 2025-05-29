import { isDevMode } from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { LoginEffects, loginReducer } from './app/+state/login';
import { AppComponent } from './app/app.component';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { routerPaths } from './app/configs';
import { httpReqresApiKeyInterceptor } from './app/interceptors';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routerPaths, withEnabledBlockingInitialNavigation()),
    provideHttpClient(withInterceptors([httpReqresApiKeyInterceptor])),
    provideAnimations(),
    provideStore({
      loginState: loginReducer,
    }),
    provideEffects([LoginEffects]),
    isDevMode()
      ? provideStoreDevtools({
          autoPause: true,
          trace: false,
          traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true),
        })
      : [],
  ],
}).catch((err) => console.error(err));
