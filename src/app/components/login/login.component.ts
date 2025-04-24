import { Component, DestroyRef, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  ILoginEmailPassword,
  ILoginState,
  LoginActions,
  SelectLoginError,
  SelectLoginSuccess,
} from '../../+state/login';
import { defaultPassword } from '../../configs';

@Component({
  selector: 'bit-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    AsyncPipe,
  ],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isError$ = this.loginState.select(SelectLoginError);
  protected readonly defaultPassword = defaultPassword;

  constructor(
    private readonly loginState: Store<ILoginState>,
    private readonly router: Router,
    private readonly fb: FormBuilder,
    private readonly destroyRef: DestroyRef,
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.initSubs();
  }

  private initForm(): void {
    this.loginForm = this.fb.group({
      email: ['michael.lawson@reqres.in'],
      password: [],
    });
  }

  private initSubs(): void {
    this.loginState
      .select(SelectLoginSuccess)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(async (isSuccess) => {
        if (!isSuccess) {
          return;
        }
        await this.router.navigateByUrl('home');
      });
  }

  onLoginClick(): void {
    const v = this.loginForm.value as ILoginEmailPassword;
    this.loginState.dispatch(LoginActions.getLoginToken(v));
  }
}
