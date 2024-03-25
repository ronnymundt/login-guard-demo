import {Component, DestroyRef, OnInit} from '@angular/core';
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { NgIf, AsyncPipe } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatInput } from '@angular/material/input';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import {
  ILoginEmailPassword,
  ILoginState,
  LoginActions,
  SelectLoginError,
  SelectLoginSuccess
} from "../../+state/login";

@Component({
    selector: 'bit-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: true,
    imports: [
      FormsModule,
      ReactiveFormsModule,
      MatFormField,
      MatLabel,
      MatInput,
      MatButton,
      NgIf,
      AsyncPipe
    ]
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup = new FormGroup('');
  public isError$ = this.loginState.select(SelectLoginError);

  constructor(
    private readonly loginState: Store<ILoginState>,
    private readonly router: Router,
    private readonly fb: FormBuilder,
    private readonly destroyRef: DestroyRef
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.initSubs();
  }

  private initForm(): void {
    this.loginForm = this.fb.group({
      email: ['michael.lawson@reqres.in'],
      password: ['1234ABC']
    });
  }

  private initSubs(): void {
    this.loginState
      .select(SelectLoginSuccess)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(async isSuccess => {
        if (!isSuccess) { return; }
        await this.router.navigateByUrl('home')
      });
  }

  // EVENTS

  public onLoginClick(): void {
    const frm = <ILoginEmailPassword>this.loginForm.value;
    this.loginState.dispatch(LoginActions.getLoginToken(frm));
  }
}
